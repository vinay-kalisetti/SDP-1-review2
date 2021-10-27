export const OrderManagementModule = [
    {
      uuid: 1,
      displayName: "Order Management Module",
      imageUrl: './modules/order1.jpg',
      description:
        "Effective order management involves the seamless integration of order data originating from multiple systems such as inventory databases, fulfillment systems, and vendor databases. It needs to provide users with a granular view of all the stages in the lifecycle of an order, from order placement to order fulfillment.",
     Modulecontents: [
        "Generate optimal routing plans for the orders.",
         "Handle changes in transportation demands based on the types of orders.",
        "Synchronize delivery processes to match customer expectations (in the case of same-day deliveries).",
        "Integrate delivery data.",
      ],
      
    }
  
  ]

  export const FreightManagementModule = [  {
    uuid: 2,
    displayName: "Freight Management Module",
    imageUrl: './modules/frieght1.png',
    description:
      "Freight management is an important aspect of any logistics operation. Inefficient freight management will lead to massive losses if left unchecked. Manual freight management is outdated in today’s era of cloud-based freight management systems, and it is vital that the TMS possesses a capable freight management module.",
      Modulecontents: [
        "Be able to predict freight charges. This freight charge estimation feature will assist in cost estimation and financial planning. Using this feature, users can calculate freight tariffs, which may vary from region to region. Also, the freight charge module should be able to predict cost accurately across different orders and order types.",
        "Be able to permit carrier self-invoicing. Every carrier will have its own invoicing requirements, and it is essential that the freight management module allows carriers to self-invoice.",        
        "Possess a settlements feature to manage invoice disputes. This will save enormous time in case of disputes that may arise with carriers.",
    ],
    
  }


]
export const TransportationModule = [ {
    uuid: 3,
    displayName: "Transportation Module",
    imageUrl: './modules/Transport1.jpg',
    description:
      "The most crucial module of any TMS. This module contributes to making the supply chain lean and efficient. It makes up the backbone of the TMS. Transportation costs form the most of the economy of any logistics endeavor, and this module assists in tracking the expenditures throughout the supply chain.",
      Modulecontents: [
        "Route optimization and consolidation. In addition to route optimization, a method to granularly view the routes taken by the trucks and freighters will assist trip supervisors in effective trip planning and execution.",
        "Support for multi-modal transportation. This is essential when 3PL and 4PL providers are involved in the supply chain of the company.",       
        "Hassle-free updates of freight documents by digitizing them and using a digital interface and mobile applications for information updates.",       
        "Fleet and freighter tracking, as well as information management.",       
        "Fleet capacity management.",
    ],
    
  },
]

export const ManufacturingModule = [
    {
  
  
      uuid: 4,
      displayName: "Manufacturing Module",
      imageUrl: './modules/manufacture1.jpg',
      description:
        "A dedicated module for the administration of the manufacturing domain will enhance the efficiency of the supply chain.",
        Modulecontents: [
        "Inventory control and management. This assists in optimally maintaining the stock reserves in the warehouse.",
        "Operations management. This feature ensures that products arrive on schedule to service consumer demands properly and are shipped immediately when orders are placed. This feature also monitors the performance throughout of warehouse personnel.",
        "Asset management. This reduces costs and risks, maximizes the return on assets, and reduces the TCO (total cost of ownership).",
      ],
      
    },
  ];
  