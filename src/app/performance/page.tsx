import Hero from "@/components/hero";
import heroImage from 'public/performance.jpg'

export default function PerformancePage() {
    return <Hero
        imgData={heroImage}
        imgAlt="welding"
        title="We serve high performance applications"
    />
}