import { useState, type ChangeEvent, type FormEvent } from 'react';

export default function Ejercicio_08() {
  const [form, setForm] = useState({
    titulo: 'titulo',
    body: 'body',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(manuel: FormEvent) {
    manuel.preventDefault();

    

    console.log('se envio el formulario: ', form);
    setLoading(false);
  }

  return (
    <div className="max-w-lg mx-auto p-6 text-black">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Crear publicación</h2>

        <div>
          <label htmlFor="titulo" className="block text-sm font-medium text-gray-700 mb-1">Título</label>
          <input
            id="titulo"
            name="titulo"
            type="text"
            value={form.titulo}
            onChange={handleChange}
            className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="body" className="block text-sm font-medium text-gray-700 mb-1">Body</label>
          <input
            id="body"
            name="body"
            type="text"
            value={form.body}
            onChange={handleChange}
            className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {error && <div className="text-red-600 text-sm">{error}</div>}

        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={loading}
            aria-busy={loading}
            className={`inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed ${loading ? 'cursor-wait' : ''}`}
          >
            {loading ? 'Enviando...' : 'Publicar'}
          </button>
        </div>
      </form>
    </div>
  );
}
