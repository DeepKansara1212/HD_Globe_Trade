import SectionHeading from "../ui/SectionHeading.jsx"

const Map = () => {
  return (
    <section className="py-20 bg-dark-default relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-10"></div>

      <div className="container-custom relative z-10">
        <SectionHeading
          title="Our Location"
          subtitle="Visit our office in Anand, Gujarat, India, or contact us through our other locations."
          center={true}
        />

        <div className="rounded-xl overflow-hidden border border-dark-border shadow-xl h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1938.821435149687!2d72.92375144306085!3d22.558729962532063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85458b55bb798b55%3A0xa7f75c5f370b985e!2sVizaTrade%20-%20Best%20Visa%20Consultant%20in%20Anand!5e0!3m2!1sen!2sin!4v1742208612314!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default Map