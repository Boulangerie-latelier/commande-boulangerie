
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export default function CommandeBoulangerie() {
  const [commandes, setCommandes] = useState([]);
  const [client, setClient] = useState("");
  const [produits, setProduits] = useState("");
  const [heure, setHeure] = useState("");
  const [paye, setPaye] = useState(false);

  const ajouterCommande = () => {
    if (!client || !produits) return;
    setCommandes([
      ...commandes,
      { client, produits, heure, paye }
    ]);
    setClient("");
    setProduits("");
    setHeure("");
    setPaye(false);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8 text-lg">
      <Card className="text-base">
        <CardContent className="space-y-6 p-6">
          <h2 className="text-2xl font-bold">Nouvelle commande</h2>
          <Input
            className="text-lg"
            placeholder="Nom du client"
            value={client}
            onChange={(e) => setClient(e.target.value)}
          />
          <Textarea
            className="text-lg"
            placeholder="Produits commandés (ex: 2 croissants, 1 pain choc...)"
            value={produits}
            onChange={(e) => setProduits(e.target.value)}
            rows={4}
          />
          <Input
            className="text-lg"
            placeholder="Heure de retrait (ex: 8h30)"
            value={heure}
            onChange={(e) => setHeure(e.target.value)}
          />
          <div className="flex items-center space-x-3 text-lg">
            <Checkbox
              id="paye"
              checked={paye}
              onCheckedChange={setPaye}
            />
            <label htmlFor="paye">Commande payée</label>
          </div>
          <Button className="text-lg px-6 py-3" onClick={ajouterCommande}>Ajouter</Button>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Commandes enregistrées</h2>
        {commandes.map((cmd, index) => (
          <Card key={index} className="text-base">
            <CardContent className="p-6 space-y-2">
              <p><strong>Client :</strong> {cmd.client}</p>
              <p><strong>Produits :</strong> {cmd.produits}</p>
              <p><strong>Heure :</strong> {cmd.heure || "Non précisée"}</p>
              <p><strong>Payé :</strong> {cmd.paye ? "Oui" : "Non"}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
