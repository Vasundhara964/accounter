export default function() {
  return [
    /*{
      title: "Dashboard",
      to: "/blog-UsersOverview",
      htmlBefore: '<i class="material-icons">speed</i>',
    },*/
    {
      title: "Dashboard",
      to: "/blog-overview",
      htmlBefore: '<i class="material-icons">speed</i>',
      htmlAfter: ""
    },
    {
      title: "Inventory",
      htmlBefore: '<i class="material-icons">inventory</i>',
      to: "/inventory",
    },
    {
      title: "invoices",
      htmlBefore: '<i class="material-icons">book</i>',
      to: "/invoices",
    },
    {
      title: "customers",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/customers",
    },
    {
      title: "bills",
      htmlBefore: '<i class="material-icons">trolley</i>',
      to: "/bills",
    },
    {
      title: "vendors",
      htmlBefore: '<i class="material-icons">people</i>',
      to: "/vendors",
    },
    {
      title: "stock images",
      htmlBefore: '<i class="material-icons">camera</i>',
      to: "/photo",
    },
    {
      title:"Banking",
      htmlBefore: '<i class="material-icons">house</i>',
      to: "/payment",
    },
    {
      title:"FAQ",
      htmlBefore: '<i class="material-icons">psychology</i>',
      to: "/faq",
    },
    /*{
      title:"Apps",
      htmlBefore: '<i class="material-icons">rocket</i>',
    }*/
  ];
}

