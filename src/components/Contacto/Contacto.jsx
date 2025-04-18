function Contacto() {
  return (
    <section className="bg-[#dbdbdba6] p-4 text-center font-mono">
      <h2 className="text-5xl font-bold  mt-20 mb-4">Contacto</h2>
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="flex flex-col gap-4"
      >
        <input
          type="hidden"
          name="access_key"
          value="093fb2b2-87c0-4844-b31b-354264669731"
        ></input>
        <input
          name="name"
          type="text"
          placeholder="Nombre"
          className="p-4 rounded-2xl border-none bg-[#f5f5f5] focus:outline-none"
        ></input>
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="p-4 rounded-2xl border-none bg-[#f5f5f5] focus:outline-none"
        ></input>
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Mensaje"
          className="p-4 rounded-2xl border-none bg-[#f5f5f5] focus:outline-none"
        ></textarea>
        <button
          type="submit"
          className="p-4 rounded-2xl border-none bg-[#274059] text-white mb-20 hover:bg-[#416e9b] lg:mb-12"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}

export default Contacto;
