import {Injectable} from '@angular/core';
import {Services} from "./interfaces";


@Injectable({
              providedIn: 'root'
            })

export class DataService {
  constructor() {
  }

  contact: any = {
    page: {
      title: ` у вас есть вопросы? пожалуйста, свяжитесь с нами:`,
      phone: `(+123) 456 789 10`,
      emails: `deepcleaning@gmail.com`
    },
    home: {
      title: `Закажите уборку прямо сейчас`,
      p: `После первого заказа мы подарим Вам сертификат со скидкой 
      20% на следующюю уборку. Оставьте заявку, 
      либо звоните։ (+123) 456 789 12`
    },
    modal: {
      title: `Закажите уборку прямо сейчас`,
      p: ` После первого заказа мы подарим 
        Вам сертификат со скидкой 20% на следующюю уборку. 
        Оставьте заявку, либо звоните։ (+123) 456 789 12`
    }
  };

  services: Services[] = [
    {id: 1, name: 'Домашняя уборка'},
    {id: 2, name: 'Уборка офисов'},
    {id: 3, name: 'Чистка ковров'},
    {id: 4, name: 'Мыть окон'},
    {id: 5, name: 'Уборка после ремонта'},
    {id: 6, name: 'Уборка мебели'}
  ];

  contactInformation() {
      return this.contact;
  }

  serviceAll() {
    return this.services;
  }
}



