import React from 'react'
import { getFromPublic } from '../../shared/functions/public'
import '../../styles/pages/aboutus/know.scss'
import TextLineReveal from '../../components/TextLineReveal'

export default function Know() {
    return (
        <div className="know" style={{backgroundImage:`url('${getFromPublic("/images/backgrounds/industry4.jpg")}')`}}>
            <div className="container">
                 <TextLineReveal> <h1>What you need to know</h1> </TextLineReveal>
                <p>
                    Here dreams and memories are made... The National Institute of Applied Sciences and Technology (INSAT) was established on 1992, it is a Tunisian institute that is affiliated with the University of Carthage. Admission is very competitive and generally students must hold a good average on the national exam to be admitted. Training technicians and engineers, it provides a post-baccalaureate education over a period of three and five years. Starting with two main branches CBA in French or ACB (Applied-Chemistry-Biology) and MPI in French or MPC (Math-Physics-Computer science) for the first year of integrated preparatory cycle, further branching to 2 tracks for ACB students, and 5 tracks for MPC students. INSAT is known of its active students in community, in clubs, associations and even in art among all Tunisia's universities. It is an inspiring place for students where many national events are organized such : TUNIROBOTS (Tunisian National Day of Robotics since 2010) , AERODAY (Tunisian National Day of Aeronautics since 2011) and SECURIDAY (Tunisia National Day of Security since 2004) Charguia INSAT, Tunis embed google maps overview of all web directories 2016
                </p>
            </div>
        </div>
    )
}
