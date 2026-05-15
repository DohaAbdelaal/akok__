import { useState } from "react";
import useLang from "../context/useLang";

export default function OrderModal({ isOpen, onClose, onConfirm }) {
  const { t } = useLang();
  // This variable maps the location name to its shipping price
const SHIPPING_PRICES = {
  "القاهرة": 80,
  "Cairo": 80,
  "الجيزة": 80,
  "Giza": 80,
  "الجيزة - ناهيا": 25,
  "Giza - Nahia": 25,
  "الجيزة - كرداسة": 30,
  "Giza - Kerdasa": 30,
  "سيناء":180,
  "Sinai":180,
  "الغردقة":180,
  "Hurghada":180

};
const OTHERS_PRICE = 100; // default price
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    gov: "",
    address: "",
    notes: ""
  });

  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const validateForm = () => {
    let newErrors = {};
    // Use optional chaining to prevent "undefined" crashes
    const requiredMsg = t.orderForm?.validation?.required || "Required";
    const phoneMsg = t.orderForm?.validation?.phoneError || "Invalid Phone";

    // 1. Name Validation
    if (!formData.name?.trim()) {
      newErrors.name = requiredMsg;
    }

    // 2. Phone Validation (Regex for Egyptian Format: 11 digits starting with 010, 011, 012, or 015)
    const phoneRegex = /^01[0125][0-9]{8}$/;
    if (!formData.phone) {
      newErrors.phone = requiredMsg;
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = phoneMsg; // Triggers if digits are less than 11 or start incorrectly
    }

    // 3. Governorate Validation
    if (!formData.gov) {
      newErrors.gov = requiredMsg;
    }

    // 4. Address Validation
    if (!formData.address?.trim()) {
      newErrors.address = requiredMsg;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // claculate shipping fee
      const shippingFee = SHIPPING_PRICES[formData.gov] || OTHERS_PRICE;

      // 2.send form data and add to it the shipping fee
      onConfirm({
        ...formData,
        shippingPrice: shippingFee 
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white p-8 rounded-ss-[50px] rounded-ee-[50px] rounded-se-xl rounded-es-xl w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl">
        
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-green-900">{t.orderForm.title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-red-500 transition-colors">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-start">
          
          {/* Full Name Input */}
          <div>
            <label className="block text-xs font-bold text-gray-400 mb-1">{t.orderForm.name}</label>
            <input 
              className={`w-full border-b py-2 outline-none transition-all ${errors.name ? 'border-red-500' : 'border-green-100 focus:border-green-600'}`}
              value={formData.name}
              onChange={(e) => {
                setFormData({...formData, name: e.target.value});
                if(errors.name) setErrors({...errors, name: null});
              }}
            />
            {errors.name && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.name}</p>}
          </div>

          {/* Phone Input: Numeric only, max 11 digits */}
          <div>
            <label className="block text-xs font-bold text-gray-400 mb-1">{t.orderForm.phone}</label>
            <input 
              type="text"
              inputMode="numeric"
              placeholder="01xxxxxxxxx"
              className={`w-full border-b py-2 outline-none transition-all ${errors.phone ? 'border-red-500' : 'border-green-100 focus:border-green-600'}`}
              value={formData.phone}
              onChange={(e) => {
                // Remove any non-digit characters
                const val = e.target.value.replace(/\D/g, ""); 
                // Restrict input to exactly 11 characters
                if (val.length <= 11) {
                  setFormData({...formData, phone: val});
                  if(errors.phone) setErrors({...errors, phone: null});
                }
              }}
            />
            {errors.phone && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.phone}</p>}
          </div>

          {/* Governorate Select */}
          <div>
            <label className="block text-xs font-bold text-gray-400 mb-1">{t.orderForm.governorate}</label>
            <select 
              className={`w-full border-b py-2 outline-none bg-white ${errors.gov ? 'border-red-500' : 'border-green-100 focus:border-green-600'}`}
              value={formData.gov}
              onChange={(e) => {
                setFormData({...formData, gov: e.target.value});
                if(errors.gov) setErrors({...errors, gov: null});
              }}
            >
              <option value="" disabled>{t.orderForm.placeholderGov}</option>
              {t.orderForm.governoratesList?.map((gov) => (
                <option key={gov} value={gov}>{gov}</option>
              ))}
            </select>
            {errors.gov && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.gov}</p>}
          </div>
            {formData.gov && (
            <p className="text-[10px] font-bold text-green-700 mt-1">
              {t.orderForm.shippingFee}: {SHIPPING_PRICES[formData.gov] || OTHERS_PRICE} EGP
            </p>
          )}
          {/* Detailed Address Textarea */}
          <div>
            <label className="block text-xs font-bold text-gray-400 mb-1">{t.orderForm.address}</label>
            <textarea 
              className={`w-full border p-3 rounded-xl h-20 outline-none focus:ring-1 ${errors.address ? 'border-red-500 focus:ring-red-500' : 'border-green-50 focus:ring-green-500'}`}
              value={formData.address}
              onChange={(e) => {
                setFormData({...formData, address: e.target.value});
                if(errors.address) setErrors({...errors, address: null});
              }}
            ></textarea>
            {errors.address && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.address}</p>}
          </div>

          {/* Additional Notes (Optional) */}
          <div>
            <label className="block text-xs font-bold text-gray-400 mb-1">{t.orderForm.notes}</label>
            <input 
              className="w-full border-b border-green-100 py-2 outline-none"
              value={formData.notes}
              onChange={(e) => setFormData({...formData, notes: e.target.value})}
            />
          </div>
          
          <button type="submit" className="w-full bg-green-900 text-white py-3 rounded-ss-2xl rounded-ee-2xl font-bold mt-4 shadow-lg hover:bg-green-800 transition-all">
            {t.orderForm.confirm}
          </button>
        </form>
      </div>
    </div>
  );
}