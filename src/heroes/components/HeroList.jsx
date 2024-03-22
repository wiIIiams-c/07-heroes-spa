import { useMemo } from 'react'
import { getheroesByPublisher } from '../helper'
import { HeroCard } from './'

export const HeroList = ({publisher}) => {
    const heroes = useMemo(() => getheroesByPublisher(publisher))

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {heroes.map((hero) => (
                <HeroCard key={hero.id} {...hero} />
            ))}
        </div>
    )
}
