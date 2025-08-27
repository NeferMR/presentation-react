function Contacto() {
  return (
    <section id="contacto" className="relative bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 md:p-8 text-center overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-3 dark:opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl animate-blob" />
        <div className="absolute top-40 right-10 w-40 h-40 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000" />
      </div>
      
      <div className="relative z-10 max-w-2xl mx-auto">
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
