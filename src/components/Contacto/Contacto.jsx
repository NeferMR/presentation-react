function Contacto() {
  return (
    <section id="contacto" className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 md:p-8 text-center font-mono">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-12 mb-8 sm:mt-20 sm:mb-12 text-[#274059] dark:text-white">
          Contacto
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-sm sm:text-base">
          ¿Tienes algún proyecto en mente? ¡Me encantaría escuchar sobre él!
        </p>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="flex flex-col gap-4"
        >
          <input
            type="hidden"
            name="access_key"
            value="093fb2b2-87c0-4844-b31b-354264669731"
          />
          <input
            name="name"
            type="text"
            placeholder="Nombre completo"
            required
            className="p-4 rounded-2xl border-2 border-transparent bg-white dark:bg-gray-700 dark:text-white focus:outline-none focus:border-[#274059] dark:focus:border-blue-400 transition-colors duration-300"
          />
          <input
            name="email"
            type="email"
            placeholder="Correo electrónico"
            required
            className="p-4 rounded-2xl border-2 border-transparent bg-white dark:bg-gray-700 dark:text-white focus:outline-none focus:border-[#274059] dark:focus:border-blue-400 transition-colors duration-300"
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Cuéntame sobre tu proyecto o consulta..."
            required
            className="p-4 rounded-2xl border-2 border-transparent bg-white dark:bg-gray-700 dark:text-white focus:outline-none focus:border-[#274059] dark:focus:border-blue-400 transition-colors duration-300 resize-none"
          />
          <button
            type="submit"
            className="p-4 rounded-2xl border-none bg-[#274059] dark:bg-blue-600 text-white mb-12 sm:mb-20 hover:bg-[#416e9b] dark:hover:bg-blue-700 transition-colors duration-300 font-semibold transform hover:scale-105"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contacto;
