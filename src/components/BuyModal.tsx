"use client";

import { useState, type ReactElement } from "react";
import { X } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import type { Product } from "@/data/products";
import { siteConfig } from "@/config/site";

const ALGERIAN_WILAYAS = [
  "Adrar", "Chlef", "Laghouat", "Oum El Bouaghi", "Batna", "Béjaïa", "Biskra", "Béchar",
  "Blida", "Bouira", "Tamanrasset", "Tébessa", "Tlemcen", "Tiaret", "Tizi Ouzou", "Alger",
  "Djelfa", "Jijel", "Sétif", "Saïda", "Skikda", "Sidi Bel Abbès", "Annaba", "Guelma",
  "Constantine", "Médéa", "Mostaganem", "M'Sila", "Mascara", "Ouargla", "Oran", "El Bayadh",
  "Illizi", "Bordj Bou Arreridj", "Boumerdès", "El Tarf", "Tindouf", "Tissemsilt", "El Oued",
  "Khenchela", "Souk Ahras", "Tipaza", "Mila", "Aïn Defla", "Naâma", "Aïn Témouchent",
  "Ghardaïa", "Relizane", "Timimoun", "Bordj Badji Mokhtar", "Ouled Djellal", "Béni Abbès",
  "In Salah", "In Guezzam", "Touggourt", "Djanet", "El M'Ghair", "El Meniaa"
];

type BuyModalProps = {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
};

export default function BuyModal({ product, isOpen, onClose }: BuyModalProps): ReactElement {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    wilaya: "",
    baladia: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return <></>;

  function handleInputChange(field: string, value: string): void {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  }

  function validateForm(): boolean {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Le numéro de téléphone est requis";
    } else if (!/^(\+213|0)[5-7][0-9]{8}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Format de téléphone invalide";
    }

    if (!formData.wilaya) {
      newErrors.wilaya = "La wilaya est requise";
    }

    if (!formData.baladia.trim()) {
      newErrors.baladia = "La baladia (commune) est requise";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Format WhatsApp message
    const message = encodeURIComponent(
      `🎯 Commande Rivorn\n\n` +
      `📦 Produit: ${product.name}\n` +
      `💰 Prix: ${product.price.toLocaleString("fr-DZ")} ${product.currency}\n` +
      `🆔 Référence: ${product.id}\n\n` +
      `👤 Informations client:\n` +
      `Nom: ${formData.name}\n` +
      `Téléphone: ${formData.phone}\n` +
      `Wilaya: ${formData.wilaya}\n` +
      `Baladia: ${formData.baladia}\n\n` +
      `Je souhaite commander ce produit.`
    );

    // Open WhatsApp with the configured number
    const whatsappUrl = `${siteConfig.whatsappLink}?text=${message}`;
    window.open(whatsappUrl, "_blank");

    // Reset form and close modal
    setFormData({ name: "", phone: "", wilaya: "", baladia: "" });
    setErrors({});
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-[32px] border border-white/10 bg-black/95 p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full border border-white/20 p-2 text-white/60 transition-colors hover:border-white/40 hover:text-white"
          aria-label="Fermer"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="mb-6 space-y-2">
          <h2 className="text-2xl font-semibold uppercase tracking-[0.25em] text-white">
            Commander {product.name}
          </h2>
          <p className="text-sm text-white/60">
            Remplissez vos informations pour finaliser la commande
          </p>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-xs uppercase tracking-[0.3em] text-white/50">Prix</div>
            <div className="mt-2 text-xl font-semibold text-white">
              {product.price.toLocaleString("fr-DZ")} {product.currency}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-white/60">
              Nom complet *
            </label>
            <Input
              type="text"
              placeholder="Votre nom et prénom"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
            />
            {errors.name && <p className="mt-1 text-xs text-[#d21034]">{errors.name}</p>}
          </div>

          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-white/60">
              Numéro de téléphone *
            </label>
            <Input
              type="tel"
              placeholder="+213 5xx xx xx xx ou 05xx xx xx xx"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              required
            />
            {errors.phone && <p className="mt-1 text-xs text-[#d21034]">{errors.phone}</p>}
          </div>

          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-white/60">
              Wilaya *
            </label>
            <select
              value={formData.wilaya}
              onChange={(e) => handleInputChange("wilaya", e.target.value)}
              className="w-full rounded-full border border-white/15 bg-black/40 px-5 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-all duration-200 focus:border-white/40 focus:bg-black/60 focus:ring-2 focus:ring-[#006233]/40"
              required
            >
              <option value="">Sélectionnez une wilaya</option>
              {ALGERIAN_WILAYAS.map((wilaya) => (
                <option key={wilaya} value={wilaya}>
                  {wilaya}
                </option>
              ))}
            </select>
            {errors.wilaya && <p className="mt-1 text-xs text-[#d21034]">{errors.wilaya}</p>}
          </div>

          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-white/60">
              Baladia (Commune) *
            </label>
            <Input
              type="text"
              placeholder="Votre commune"
              value={formData.baladia}
              onChange={(e) => handleInputChange("baladia", e.target.value)}
              required
            />
            {errors.baladia && <p className="mt-1 text-xs text-[#d21034]">{errors.baladia}</p>}
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" size="lg" onClick={onClose} className="flex-1">
              Annuler
            </Button>
            <Button type="submit" size="lg" className="flex-1">
              Commander via WhatsApp
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

