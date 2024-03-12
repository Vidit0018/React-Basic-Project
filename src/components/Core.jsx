import {CORE_CONCEPTS} from '../data.js';
import CoreConcepts from './CoreConcepts.jsx';
export default function Core(){
    return(
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) =><CoreConcepts key={conceptItem.title} {...conceptItem}/>)}
            {/* <CoreConcepts 
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
            />
            
            <CoreConcepts
            {...CORE_CONCEPTS[1]}
            />
            <CoreConcepts
            {...CORE_CONCEPTS[2]}
            />
            <CoreConcepts
            {...CORE_CONCEPTS[3]}
            /> */}
            
          </ul>
        </section>
    );
}