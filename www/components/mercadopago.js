// SDK do Mercado Pago
import 'com.mercadopago.MercadoPago';
// Adicione as credenciais
MercadoPago.SDK.setAccessToken("APP_USR-3990043199723653-101303-c3cfffbcae7251f70581355da61a5612-178842358");


// Cria um objeto de preferência
preference = new Preference();

// Cria um item na preferência
item = new Item();
item.setTitle("Guarda-sol")
    .setQuantity(1)
    .setUnitPrice((float), 15.00);
preference.appendItem(item);
preference.save();


