import { useRef, useState } from "react";
import { allCocktails } from "../../constants";

const Menu = () => {

	const contentRef = useRef();
	const [currentIndex, setCurrentIndex] = useState(0);

	const totalCocktails = allCocktails.length;

	const gotoSlide = (index) => {
		const newIndex = (index + totalCocktails) % totalCocktails;
		setCurrentIndex(newIndex);
	};

	const getCocktailAt = (indexOffset) => {
		const index =
			(currentIndex + indexOffset + totalCocktails) % totalCocktails;
		return allCocktails[index];
	};
	const currentCocktail = getCocktailAt(0);
	const prevCocktail = getCocktailAt(-1);
	const nextCocktail = getCocktailAt(1);

	return (
		<section id="menu" aria-labelledby="menu-heading">
			<h2 id="menu-heading" className="sr-only">
				Cocktail Menu
			</h2>

			<nav className="cocktail-tabs" aria-label="Cocktail Navigation">
				{allCocktails.map((cocktail, index) => {
					const isActive = index === currentIndex;
					return (
						<button
							key={cocktail.id}
							className={`
                    ${
						isActive
							? "text-white border-white"
							: "text-white/50 border-white/50"
					}`}
							onClick={() => gotoSlide(index)}>
							{cocktail.name}
						</button>
					);
				})}
			</nav>

			<div className="content">
				<div className="arrows">
					<button
						className="text-left"
						onClick={() => gotoSlide(currentIndex - 1)}>
						{" "}
						<span>{prevCocktail.name}</span>
						<img
							src="/images/right-arrow.png"
							alt="right-arrow"
							aria-hidden="true"
						/>
					</button>

					<button
						className="text-left"
						onClick={() => gotoSlide(currentIndex + 1)}>
						{" "}
						<span>{nextCocktail.name}</span>
						<img
							src="/images/left-arrow.png"
							alt="left-arrow"
							aria-hidden="true"
						/>
					</button>
				</div>

				<div className="cocktail">
					<img
						src={currentCocktail.image}
						className="object-contain"
					/>
				</div>

				<div className="recipe">
					<div ref= {contentRef} className="info">
						<p>Recipe for:</p>
						<p id="title">{currentCocktail.name}</p>
					</div>
				</div>

				<div className="details">
					<h2>{currentCocktail.title}</h2>
					<p>{currentCocktail.description}</p>
				</div>
			</div>
		</section>
	);
};

export default Menu;
