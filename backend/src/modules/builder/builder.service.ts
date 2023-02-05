import { HttpService } from '@nestjs/axios';
import { Injectable, OnModuleInit } from '@nestjs/common';
import {  InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item } from './items.schema';

@Injectable()
export class BuilderService implements OnModuleInit {
  constructor(
    private httpService: HttpService,
    @InjectModel('items') private buildEventModel: Model<Item>,
  ) {
    
    this.store({
      product: 'Chronomat Automatic GMT 40',
      description: "Die Chronomat Automatic GMT 40 ist Breitlings Verbeugung vor der Weltreise  nicht nur dank des Zifferblatts \n das zwei Zeitzonen anzeigt, \n sondern auch dank ihrer legeren Ästhetik. \n Das dezente Zusammenspiel von Zifferblättern sowie Gehäusen und Armbändern aus Edelstahl passt zu jeder Garderobe. \n Zugleich unterstreicht die Ton in Ton gehaltene 24-Stunden-Skala den roten GMT-Zeiger. \n Angetrieben wird die GMT-Komplikation vom Breitling-Kaliber 32. \n Dank der 24-Stunden-Skala kann der Nutzer eine zweite Zeitzone mitverfolgen und weiss auf Anhieb, \n ob es dort Tag oder Nacht ist, während die «Zwiebelkrone» (ein klassisches Merkmal der Chronomat, \n  das seinen Namen der geriffelten Kuppelform verdankt) einfache Einstellungen ermöglicht. \n  Als Allzweck-Sportuhr ist die GMT 40 in allen Universen von Breitling zu Hause – zu Land, \n  zu Wasser und in der Luft – und punktet mit einer beeindruckenden Wasserdichtigkeit bis 200 m.\n  Die Mission der Chronomat, «eine Uhr für alle Zwecke» zu sein, \n  ist dank der praktischen Grösse und des dezenten Stils der GMT 40 heute mehr denn je Realität. \n Robust genug fürs Fitnesscenter, doch auch mit der nötigen Eleganz für den Abendanzug – wenn es je eine Uhr zum Reisen gab, dann ist es diese.",
      price : "5.550€",
      amount : 2,
      productId: "A32398101A1A1",
      imgId : "A23332B230"
    });
  
  }

  async getProduct(id: string){
    return  await this.buildEventModel.findOne({ productId : id  }).exec();
  }

  async deleteProduct(id: string){
    return  await this.buildEventModel.findOneAndDelete({ productId : id }).exec();
  }
  async store(event: Item) {
    // filter searched for id if id is found it updates parameters
    const filter = { productId: event.productId };
    return this.buildEventModel.findOneAndUpdate(filter, event, { upsert: true }).exec();
  }
  async onModuleInit() {}
}
