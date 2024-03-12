import { EXAMPLES } from '../data.js';
import TabButton from './TabButton.jsx';
import { useState } from 'react';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';
export default function Examples() {
    const [selectedTopic,setSelectedTopic]=useState();
 
    function handleSelect(selectedButton){
        setSelectedTopic(selectedButton);
      }
      let tabcontent = <p>Please Select a Topic</p>;
      if(selectedTopic){
        tabcontent= <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p> {EXAMPLES[selectedTopic].description}</p>\
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>;
      }
    return(
     
        <Section id="examples">
          <Tabs
          ButtonsContainer="menu"
          buttons={<>
            <TabButton isSelected={selectedTopic==='components'} onSelect={()=> handleSelect('components')}> Components </TabButton>
            <TabButton isSelected={selectedTopic==='jsx'}  onSelect={()=> handleSelect('jsx')}> JSX </TabButton>
            <TabButton isSelected={selectedTopic==='props'}  onSelect={()=> handleSelect('props')}> Props </TabButton>
            <TabButton isSelected={selectedTopic==='state'}  onSelect={()=> handleSelect('state')}> State </TabButton>
          </>}>
          {tabcontent}
            
          </Tabs>
         

        </Section>
        
    );
    
};
