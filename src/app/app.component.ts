import { Component, OnInit } from '@angular/core'

declare let paysafe: any
const API_KEY = "T1QtNjE1NjA6Qi1xYTItMC01ODI0NzQ0YS0wLTMwMmQwMjE0NDA2MjUwMDNjMjZjZmUzZmVkYmMxM2UyMmY4YTYwMzBhMWJlMDQ4NjAyMTUwMDgyYTYzYzAxNTk5MmRkNWRiYWFhNTIxMTUxNzk3NDNjMTY4MDNmNDc="
const OPTIONS = {
  environment: "TEST",
  fields: {
    cardNumber: {
      selector: "#card-number",
      placeholder: "Card number"
    },
    expiryDate: {
      selector: "#expiration-date",
      placeholder: "Expiration date"
    },
    cvv: {
      selector: "#cvv",
      placeholder: "CVV"
    }
  }
}

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: [ './app/app.component.css' ]
})
export class AppComponent implements OnInit {

  private paysafeInstance: any

  ngOnInit(): void {
    let instance = this
    paysafe.fields.setup(API_KEY, OPTIONS, (paysafeInstance: any, error: any) => {
      if (error) {
        alert(`Setup error: [${error.code}] ${error.detailedMessage}`)
      } else {
        instance.paysafeInstance = paysafeInstance
      }
    })
  }
  

  pay(): void {
    let instance = this
    if (!instance.paysafeInstance) {
      console.log('No instance')
    } else {
      instance.paysafeInstance.tokenize((paysafeInstance: any, error: any, result: any) => {
        if (error) {
          alert(`Tokenization error: [${error.code}] ${error.detailedMessage}`)
        } else {
          alert(`Token: ${result.token}`)
        }
      })
    }
  }
}