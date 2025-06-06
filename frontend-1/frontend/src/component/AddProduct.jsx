// import { useState } from "react";

// export default function AddProduct() {
//   const [form, setForm] = useState({
//     name: "",
//     type: "",
//     description: "",
//     tagline: "",
//     price: "",
//     stock: 0,
//     imageUrl: "",
//     videoLink: "",
//     category: "",
//     features: [""],
//     benefits: [""],
//     powerSaving: {
//       traditionalSprayerConsumption: "",
//       warriorConsumption: "",
//       efficiencyIncrease: "",
//       operationalCostReduction: ""
//     },
//     graph: {
//       type: "bar",
//       title: "",
//       unit: "",
//       data: [{ label: "", value: "" }]
//     }
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleArrayChange = (index, key, value) => {
//     const newArray = [...form[key]];
//     newArray[index] = value;
//     setForm({ ...form, [key]: newArray });
//   };

//   const handlePowerSavingChange = (key, value) => {
//     setForm({ ...form, powerSaving: { ...form.powerSaving, [key]: value } });
//   };

//   const handleGraphDataChange = (index, key, value) => {
//     const newData = [...form.graph.data];
//     newData[index][key] = key === "value" ? parseFloat(value) : value;
//     setForm({ ...form, graph: { ...form.graph, data: newData } });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("https://bullwork-mobility.onrender.com/api/products", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form)
//       });
//       if (res.ok) alert("Product saved!");
//     } catch (err) {
//       console.error("Failed to submit:", err);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-2xl mx-auto">
//       <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="input" />
//       <input name="type" value={form.type} onChange={handleChange} placeholder="Type" className="input" />
//       <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="input" />
//       <input name="tagline" value={form.tagline} onChange={handleChange} placeholder="Tagline" className="input" />
//       <input name="price" type="number" value={form.price} onChange={handleChange} placeholder="Price" className="input" />
//       <input name="stock" type="number" value={form.stock} onChange={handleChange} placeholder="Stock" className="input" />
//       <input name="imageUrl" value={form.imageUrl} onChange={handleChange} placeholder="Image URL" className="input" />
//       <input name="videoLink" value={form.videoLink} onChange={handleChange} placeholder="Video Link" className="input" />

//       {/* Features */}
//       <div>
//         <h4>Features</h4>
//         {form.features.map((feature, i) => (
//           <input key={i} value={feature} onChange={(e) => handleArrayChange(i, "features", e.target.value)} className="input" />
//         ))}
//       </div>

//       {/* Benefits */}
//       <div>
//         <h4>Benefits</h4>
//         {form.benefits.map((benefit, i) => (
//           <input key={i} value={benefit} onChange={(e) => handleArrayChange(i, "benefits", e.target.value)} className="input" />
//         ))}
//       </div>

//       {/* Power Saving */}
//       <div>
//         <h4>Power Saving</h4>
//         {Object.keys(form.powerSaving).map((key) => (
//           <input
//             key={key}
//             value={form.powerSaving[key]}
//             onChange={(e) => handlePowerSavingChange(key, e.target.value)}
//             placeholder={key}
//             className="input"
//           />
//         ))}
//       </div>

//       {/* Graph */}
//       <div>
//         <h4>Graph</h4>
//         <input value={form.graph.title} onChange={(e) => setForm({ ...form, graph: { ...form.graph, title: e.target.value } })} placeholder="Graph Title" className="input" />
//         <input value={form.graph.unit} onChange={(e) => setForm({ ...form, graph: { ...form.graph, unit: e.target.value } })} placeholder="Unit" className="input" />
//         {form.graph.data.map((d, i) => (
//           <div key={i} className="flex space-x-2">
//             <input value={d.label} onChange={(e) => handleGraphDataChange(i, "label", e.target.value)} placeholder="Label" className="input" />
//             <input value={d.value} onChange={(e) => handleGraphDataChange(i, "value", e.target.value)} type="number" placeholder="Value" className="input" />
//           </div>
//         ))}
//       </div>

//       <button type="submit" className="btn btn-primary">Submit</button>
//     </form>
//   );
// }



import { useState } from 'react';

export default function AddProduct() {
  const [form, setForm] = useState({
    name: '',
    type: '',
    description: '',
    tagline: '',
    price: '',
    stock: 0,
    imageUrl: '',
    videoLink: '',
    category: '',
    benefits: [''],
    features: [''],
    powerSaving: {
      traditionalSprayerConsumption: '',
      warriorConsumption: '',
      efficiencyIncrease: '',
      operationalCostReduction: '',
    },
    graph: {
      type: 'bar',
      title: '',
      unit: '',
      data: [{ label: '', value: '' }],
    },
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
    setForm({
      ...form,
      powerSaving: { ...form.powerSaving, [key]: value },
    });
  };

  const handleGraphDataChange = (index, key, value) => {
    const newData = [...form.graph.data];
    newData[index][key] = key === 'value' ? parseFloat(value) : value;
    setForm({ ...form, graph: { ...form.graph, data: newData } });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await fetch('https://bullwork-mobility.onrender.com/api/products/addproduct', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(form),
  //     });
  //     if (res.ok) alert('✅ Product saved!');
  //     else alert('❌ Error saving product.');
  //   } catch (err) {
  //     console.error('Failed to submit:', err);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Get token from localStorage (or wherever you store it)
    const token = localStorage.getItem('token'); // or use context
  
    try {
      const res = await fetch('https://bullwork-mobility.onrender.com/api/products/addproduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Include the token here
        },
        body: JSON.stringify(form),
      });
  
      if (res.ok) {
        alert('✅ Product saved!');
      } else if (res.status === 401) {
        alert('🚫 Unauthorized: Please log in.');
      } else {
        alert('❌ Error saving product.');
      }
    } catch (err) {
      console.error('Failed to submit:', err);
      alert('❌ Submission failed. Check the console for details.');
    }
  };
  

  const renderInput = (label, name, type = 'text') => (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1">
        {label}
      </label>
      <input
        name={name}
        type={type}
        value={form[name]}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg space-y-6"
    >
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">Add Product</h2>

      {/* Basic Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {renderInput('Name', 'name')}
        {renderInput('Type', 'type')}
        {renderInput('Tagline', 'tagline')}
        {renderInput('Category', 'category')}
        {renderInput('Price', 'price', 'number')}
        {renderInput('Stock', 'stock', 'number')}
        {renderInput('Image URL', 'imageUrl')}
        {renderInput('Video Link', 'videoLink')}
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Description
        </label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      {/* Features */}
      <div>
        <h3 className="font-semibold text-gray-800">Features</h3>
        {form.features.map((feature, i) => (
          <input
            key={i}
            value={feature}
            onChange={(e) => handleArrayChange(i, 'features', e.target.value)}
            className="w-full mt-1 mb-2 px-3 py-2 border border-gray-300 rounded"
            placeholder={`Feature ${i + 1}`}
          />
        ))}
        <button
          type="button"
          onClick={() =>
            setForm({ ...form, features: [...form.features, ''] })
          }
          className="text-indigo-600 text-sm hover:underline"
        >
          + Add Feature
        </button>
      </div>

      {/* Benefits */}
      <div>
        <h3 className="font-semibold text-gray-800">Benefits</h3>
        {form.benefits.map((benefit, i) => (
          <input
            key={i}
            value={benefit}
            onChange={(e) => handleArrayChange(i, 'benefits', e.target.value)}
            className="w-full mt-1 mb-2 px-3 py-2 border border-gray-300 rounded"
            placeholder={`Benefit ${i + 1}`}
          />
        ))}
        <button
          type="button"
          onClick={() =>
            setForm({ ...form, benefits: [...form.benefits, ''] })
          }
          className="text-indigo-600 text-sm hover:underline"
        >
          + Add Benefit
        </button>
      </div>

      {/* Power Saving */}
      <div>
        <h3 className="font-semibold text-gray-800">Power Saving Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.keys(form.powerSaving).map((key) => (
            <input
              key={key}
              value={form.powerSaving[key]}
              onChange={(e) => handlePowerSavingChange(key, e.target.value)}
              placeholder={key}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          ))}
        </div>
      </div>

      {/* Graph */}
      <div>
        <h3 className="font-semibold text-gray-800">Graph</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            value={form.graph.title}
            onChange={(e) =>
              setForm({ ...form, graph: { ...form.graph, title: e.target.value } })
            }
            placeholder="Graph Title"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
          <input
            value={form.graph.unit}
            onChange={(e) =>
              setForm({ ...form, graph: { ...form.graph, unit: e.target.value } })
            }
            placeholder="Graph Unit"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        {form.graph.data.map((d, i) => (
          <div key={i} className="flex gap-2 mt-2">
            <input
              value={d.label}
              onChange={(e) => handleGraphDataChange(i, 'label', e.target.value)}
              placeholder="Label"
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
            <input
              value={d.value}
              type="number"
              onChange={(e) => handleGraphDataChange(i, 'value', e.target.value)}
              placeholder="Value"
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            setForm({ ...form, graph: { ...form.graph, data: [...form.graph.data, { label: '', value: '' }] } })
          }
          className="text-indigo-600 text-sm hover:underline mt-2"
        >
          + Add Graph Data
        </button>
      </div>

      {/* Submit */}
      <div className="pt-4">
        <button
          type="submit"
          className="w-full md:w-auto px-6 py-3 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-700 transition"
        >
          Save Product
        </button>
      </div>
    </form>
  );
}
