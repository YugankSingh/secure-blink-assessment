<template>
	<HeroSection />
	<AboutUsSection />
	<OurServicesSection />
	<CoreTechnologySection />
	<ContactUsSection />
	<FooterSection />
</template>

<script>
import HeroSection from "../components/HeroSection"
import AboutUsSection from "../components/AboutUsSection"
import OurServicesSection from "../components/OurServicesSection"
import CoreTechnologySection from "../components/CoreTechnologySection"
import ContactUsSection from "../components/ContactUsSection"
import FooterSection from "../components/FooterSection"

export default {
	name: "HomeView",
	components: {
		HeroSection,
		AboutUsSection,
		OurServicesSection,
		CoreTechnologySection,
		ContactUsSection,
		FooterSection,
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
