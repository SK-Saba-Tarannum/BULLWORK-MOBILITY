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
      traditionalConsumption: '',
      ourProductConsumption: '',
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      const res = await fetch('https://bullwork-mobility.onrender.com/api/products/addproduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert(' Product saved!');
      } else if (res.status === 401) {
        alert(' Unauthorized: Please log in.');
      } else {
        alert(' Error saving product.');
      }
    } catch (err) {
      console.error('Failed to submit:', err);
      alert(' Submission failed. Check the console for details.');
    }
  };

  const renderInput = (label, name, type = 'text') => (
    <div>
      <label className="block text-sm font-semibold text-purple-800 mb-1">
        {label}
      </label>
      <input
        name={name}
        type={type}
        value={form[name]}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 shadow-sm bg-white text-gray-800"
      />
    </div>
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-5xl mx-auto p-8 bg-white border border-purple-200 rounded-2xl shadow-xl space-y-8"
    >
      <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">Add New Product</h2>

      {/* Basic Info */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {renderInput('Product Name', 'name')}
        {renderInput('Type', 'type')}
        {renderInput('Tagline', 'tagline')}
        {renderInput('Category', 'category')}
        {renderInput('Price', 'price', 'number')}
        {renderInput('Stock', 'stock', 'number')}
        {renderInput('Image URL', 'imageUrl')}
        {renderInput('Video Link', 'videoLink')}
      </section>

      {/* Description */}
      <section>
        <label className="block text-sm font-semibold text-purple-800 mb-1">Description</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          rows={3}
          className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 shadow-sm bg-white text-gray-800"
        />
      </section>

      {/* Features */}
      <section className="bg-purple-50 p-4 rounded-lg border border-purple-200 shadow-sm">
        <h3 className="text-lg font-semibold text-purple-700 mb-3">Features</h3>
        {form.features.map((feature, i) => (
          <input
            key={i}
            value={feature}
            onChange={(e) => handleArrayChange(i, 'features', e.target.value)}
            className="w-full mt-1 mb-2 px-4 py-2 border border-purple-300 rounded bg-white"
            placeholder={`Feature ${i + 1}`}
          />
        ))}
        <button
          type="button"
          onClick={() => setForm({ ...form, features: [...form.features, ''] })}
          className="text-purple-600 text-sm hover:underline"
        >
          + Add Feature
        </button>
      </section>

      {/* Benefits */}
      <section className="bg-purple-50 p-4 rounded-lg border border-purple-200 shadow-sm">
        <h3 className="text-lg font-semibold text-purple-700 mb-3">Benefits</h3>
        {form.benefits.map((benefit, i) => (
          <input
            key={i}
            value={benefit}
            onChange={(e) => handleArrayChange(i, 'benefits', e.target.value)}
            className="w-full mt-1 mb-2 px-4 py-2 border border-purple-300 rounded bg-white"
            placeholder={`Benefit ${i + 1}`}
          />
        ))}
        <button
          type="button"
          onClick={() => setForm({ ...form, benefits: [...form.benefits, ''] })}
          className="text-purple-600 text-sm hover:underline"
        >
          + Add Benefit
        </button>
      </section>

      {/* Power Saving Metrics */}
      <section className="bg-purple-50 p-4 rounded-lg border border-purple-200 shadow-sm">
        <h3 className="text-lg font-semibold text-purple-700 mb-3">Power Saving Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.keys(form.powerSaving).map((key) => (
            <input
              key={key}
              value={form.powerSaving[key]}
              onChange={(e) => handlePowerSavingChange(key, e.target.value)}
              placeholder={key.replace(/([A-Z])/g, ' $1')}
              className="w-full px-4 py-2 border border-purple-300 rounded bg-white"
            />
          ))}
        </div>
      </section>

      {/* Graph Section */}
      <section className="bg-purple-50 p-4 rounded-lg border border-purple-200 shadow-sm">
        <h3 className="text-lg font-semibold text-purple-700 mb-3">Graph Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
          <input
            value={form.graph.title}
            onChange={(e) => setForm({ ...form, graph: { ...form.graph, title: e.target.value } })}
            placeholder="Graph Title"
            className="w-full px-4 py-2 border border-purple-300 rounded bg-white"
          />
          <input
            value={form.graph.unit}
            onChange={(e) => setForm({ ...form, graph: { ...form.graph, unit: e.target.value } })}
            placeholder="Graph Unit"
            className="w-full px-4 py-2 border border-purple-300 rounded bg-white"
          />
        </div>
        {form.graph.data.map((d, i) => (
          <div key={i} className="flex gap-3 mt-2">
            <input
              value={d.label}
              onChange={(e) => handleGraphDataChange(i, 'label', e.target.value)}
              placeholder="Label"
              className="w-full px-4 py-2 border border-purple-300 rounded bg-white"
            />
            <input
              value={d.value}
              type="number"
              onChange={(e) => handleGraphDataChange(i, 'value', e.target.value)}
              placeholder="Value"
              className="w-full px-4 py-2 border border-purple-300 rounded bg-white"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            setForm({
              ...form,
              graph: { ...form.graph, data: [...form.graph.data, { label: '', value: '' }] },
            })
          }
          className="text-purple-600 text-sm hover:underline mt-3"
        >
          + Add Graph Data
        </button>
      </section>

      {/* Submit */}
      <div className="pt-6 text-center">
        <button
          type="submit"
          className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold rounded-xl shadow-md hover:from-purple-700 hover:to-purple-900 transition duration-300"
        >
          Save Product
        </button>
      </div>
    </form>
  );
}
