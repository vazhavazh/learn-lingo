import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Statistic from "@/components/Statistic/Statistic";

export default function Home() {
	return (
		<>
			<Header />
			<main className='px-2 min-[680px]:px-8 lg:px-16'>
				<Hero />
				<Statistic />
			</main>
		</>
	);
}
