// Centralized Phone Number - Update once to change it everywhere
const PHONE_NUMBER = "201153934415"; 

export const sendWhatsAppOrder = (orderData, deliveryInfo, t, isCart = false) => {
  
  // 1. calculating price before shippment
  const subtotal = isCart 
    ? orderData.reduce((acc, item) => acc + item.price * item.quantity, 0)
    : (orderData.price * (orderData.quantity || 1));

  // 2. take the shipment price from the ordar modal
  const shipping = deliveryInfo.shippingPrice || 0;

  // 3. calaulating final total
  const finalTotal = subtotal + shipping;

  let itemsContent = "";

  if (isCart) {
    // Logic for Full Cart Orders
    itemsContent = orderData
      .map(
        (item) =>
          `• *${item.arabicName}* ${item.variantLabel ? `(${item.variantLabel})` : ""}\n  الكمية: ${item.quantity} × ${item.price} ج.م`
      )
      .join("\n\n");
  } else {
    // Logic for Single Direct Product Orders
    itemsContent = `*المنتج:* ${orderData.name}\n*السعر:* ${orderData.price} ج.م\n*الكمية:* ${orderData.quantity}`;
  }

  // 4. تنسيق الرسالة النهائي بالعربي مع تفاصيل الحساب
  const message = `
*طلب جديد | AKOK*
--------------------------
${itemsContent}
--------------------------
*سعر المنتجات:* ${subtotal} ج.م
*مصاريف الشحن:* ${shipping} ج.م
*الإجمالي النهائي:* ${finalTotal} ج.م
--------------------------
*العميل:* ${deliveryInfo.name}
*الموبايل:* ${deliveryInfo.phone}
*المحافظة:* ${deliveryInfo.gov}
*العنوان:* ${deliveryInfo.address}
*ملاحظات:* ${deliveryInfo.notes || "لا يوجد"}
--------------------------
تم الإرسال عبر موقع AKOK
  `.trim();

  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`, "_blank");
};