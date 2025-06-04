import { useState } from "react";

export default function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    type: "",
    description: "",
    tagline: "",
    price: "",
    stock: 0,
    imageUrl: "",
    videoLink: "",
    category: "",
    features: [""],
    benefits: [""],
    powerSaving: {
      traditionalSprayerConsumption: "",
      warriorConsumption: "",
      efficiencyIncrease: "",
      operationalCostReduction: ""
    },
    graph: {
      type: "bar",
      title: "",
      unit: "",
      data: [{ label: "", value: "" }]
    }
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleArrayChange = (index, key, value) => {
    const newArray = [...form[key]];
    newArray[index] = value;
    setForm({ ...form, [key]: newArray });
  };

  const handlePowerSavingChange = (key, value) => {
    setForm({ ...form, powerSaving: { ...form.powerSaving, [key]: value } });
  };

  const handleGraphDataChange = (index, key, value) => {
    const newData = [...form.graph.data];
    newData[index][key] = key === "value" ? parseFloat(value) : value;
    setForm({ ...form, graph: { ...form.graph, data: newData } });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (res.ok) alert("Product saved!");
    } catch (err) {
      console.error("Failed to submit:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-2xl mx-auto">
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="input" />
      <input name="type" value={form.type} onChange={handleChange} placeholder="Type" className="input" />
      <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="input" />
      <input name="tagline" value={form.tagline} onChange={handleChange} placeholder="Tagline" className="input" />
      <input name="price" type="number" value={form.price} onChange={handleChange} placeholder="Price" className="input" />
      <input name="stock" type="number" value={form.stock} onChange={handleChange} placeholder="Stock" className="input" />
      <input name="imageUrl" value={form.imageUrl} onChange={handleChange} placeholder="Image URL" className="input" />
      <input name="videoLink" value={form.videoLink} onChange={handleChange} placeholder="Video Link" className="input" />

      {/* Features */}
      <div>
        <h4>Features</h4>
        {form.features.map((feature, i) => (
          <input key={i} value={feature} onChange={(e) => handleArrayChange(i, "features", e.target.value)} className="input" />
        ))}
      </div>

      {/* Benefits */}
      <div>
        <h4>Benefits</h4>
        {form.benefits.map((benefit, i) => (
          <input key={i} value={benefit} onChange={(e) => handleArrayChange(i, "benefits", e.target.value)} className="input" />
        ))}
      </div>

      {/* Power Saving */}
      <div>
        <h4>Power Saving</h4>
        {Object.keys(form.powerSaving).map((key) => (
          <input
            key={key}
            value={form.powerSaving[key]}
            onChange={(e) => handlePowerSavingChange(key, e.target.value)}
            placeholder={key}
            className="input"
          />
        ))}
      </div>

      {/* Graph */}
      <div>
        <h4>Graph</h4>
        <input value={form.graph.title} onChange={(e) => setForm({ ...form, graph: { ...form.graph, title: e.target.value } })} placeholder="Graph Title" className="input" />
        <input value={form.graph.unit} onChange={(e) => setForm({ ...form, graph: { ...form.graph, unit: e.target.value } })} placeholder="Unit" className="input" />
        {form.graph.data.map((d, i) => (
          <div key={i} className="flex space-x-2">
            <input value={d.label} onChange={(e) => handleGraphDataChange(i, "label", e.target.value)} placeholder="Label" className="input" />
            <input value={d.value} onChange={(e) => handleGraphDataChange(i, "value", e.target.value)} type="number" placeholder="Value" className="input" />
          </div>
        ))}
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}
