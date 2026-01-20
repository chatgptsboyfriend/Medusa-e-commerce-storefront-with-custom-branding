const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/fond.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default Hero
