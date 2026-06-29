import { ToastContainer } from '../components/common/ToastContainer'
import { Navbar } from '../components/landing/Navbar'
import { HeroSection } from '../components/landing/HeroSection'
import { AboutSection } from '../components/landing/AboutSection'
import { FeaturedProducts } from '../components/landing/FeaturedProducts'
import { WhyChooseUs } from '../components/landing/WhyChooseUs'
import { Testimonials } from '../components/landing/Testimonials'
import { ContactSection } from '../components/landing/ContactSection'
import { Footer } from '../components/landing/Footer'
import { useProducts } from '../hooks/useProducts'

export const LandingPage = () => {
  const { products, loading, error } = useProducts({ featured: true, limit: 6 })

  return (
    <>
      <ToastContainer />
      <a href="#main-content" className="skip-link">
        Lewati ke konten utama
      </a>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <FeaturedProducts products={products} loading={loading} error={error} />
        <WhyChooseUs />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
