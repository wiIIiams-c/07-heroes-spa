import { getheroesByPublisher } from '../helper'
import { HeroCard } from './'

export const HeroList = ({publisher}) => {
    const heroes = getheroesByPublisher(publisher)

    return (
        <div className="row rows-cols-1 rows-cols-md-3 g-3">
            {heroes.map((hero) => (
                <HeroCard key={hero.id} {...hero} />
            ))}
        </div>
    )
}
