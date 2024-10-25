
import './MainComponent.css'; // Import the CSS file
import  { MultipleChoiceSingle } from '../components/MultipleChoice';
import { useState } from 'react';
import { MultipleChoiceMultiple } from '../components/multipleChoiceMultiple';
import { TrueFalseNotGiven } from '../components/TrueFalseNotGiven';
import { Matching } from '../components/matching';
import { ShortAnswer } from '../components/ShortAnswer';
import { SentenceCompletion } from '../components/SentenceCompletion';
import { SummaryCompletion } from '../components/SummaryCOmpletion';
import { TableCompletion } from '../components/TableCompletion';
import { Classification } from '../components/Classification';
import { DiagramLabeling } from '../components/DiagramLabeling';






  const MainComponent = () => {
    //Dummy Data for testing More questions
    const data = [
      // Multiple Choice Single
      {
        id: 'mc1',
        type: 'multipleChoiceSingle',
        question: 'What is the primary function of mitochondria in a cell?',
        options: [
          'Energy production through cellular respiration',
          'Protein synthesis',
          'Cell division',
          'Storage of genetic material'
        ],
        answer: 'A'
      },
    
      // Multiple Choice Multiple
      {
        id: 'mcm1',
        type: 'multipleChoiceMultiple',
        question: 'Which of the following are noble gases? (Select all that apply)',
        options: [
          'Helium',
          'Neon',
          'Oxygen',
          'Argon',
          'Nitrogen'
        ],
        answer: ['A', 'B', 'D']
      },
    
      // True/False/Not Given
      {
        id: 'tfng1',
        type: 'trueFalseNotGiven',
        question: 'Read the passage and decide if the statements are True, False, or Not Given.',
        statements: [
          'The Industrial Revolution began in Britain.',
          'Steam engines were first used in agriculture.',
          'Child labor laws were immediately implemented.',
          'The revolution spread to France by 1830.'
        ],
        answer: ['True', 'False', 'Not Given', 'True']
      },
    
      // Short Answer
      {
        id: 'sa1',
        type: 'shortAnswer',
        question: 'Complete the following statements about photosynthesis.',
        prompts: [
          'The primary energy source for photosynthesis is ___________.',
          'The process converts carbon dioxide and water into __________ and oxygen.',
          'This process occurs in the __________ of plant cells.'
        ],
        wordLimit: 2,
        answer: ['sunlight', 'glucose', 'chloroplasts']
      },
    
      // Sentence Completion
      {
        id: 'sc1',
        type: 'sentenceCompletion',
        question: 'Complete these sentences about the water cycle.',
        sentences: [
          { prefix: 'Water vapor in the air becomes liquid through ', suffix: '.'},
          { prefix: 'The process of water changing from liquid to gas is called ', suffix: '.'},
          { prefix: 'Water droplets in clouds combine and fall as ', suffix: '.'}
        ],
        wordLimit: 2,
        answer: ['condensation', 'evaporation', 'precipitation']
      },
    
      // Summary Completion
      {
        id: 'smc1',
        type: 'summaryCompletion',
        question: 'Complete the summary using words from the box below.',
        summary: [
          { text: 'The process of ', isGap: false },
          { isGap: true },
          { text: ' begins when food enters the ', isGap: false },
          { isGap: true },
          { text: '. Enzymes break down the food into smaller ', isGap: false },
          { isGap: true },
          { text: '.', isGap: false }
        ],
        wordList: ['digestion', 'molecules', 'stomach', 'mouth', 'nutrients', 'proteins'],
        answer: ['digestion', 'mouth', 'nutrients']
      },
    
      // Table Completion
      {
        id: 'tc1',
        type: 'tableCompletion',
        question: 'Complete the table about types of rocks.',
        headers: ['Rock Type', 'Formation Process', 'Example'],
        rows: [
          [
            { text: 'Igneous', isGap: false },
            { isGap: true },
            { text: 'Granite', isGap: false }
          ],
          [
            { text: 'Sedimentary', isGap: false },
            { text: 'Compression of sediments', isGap: false },
            { isGap: true }
          ],
          [
            { text: 'Metamorphic', isGap: false },
            { isGap: true },
            { text: 'Marble', isGap: false }
          ]
        ],
        wordLimit: 3,
        answer: ['Cooling of magma', 'Sandstone', 'Heat and pressure']
      },
    
      // Classification
      {
        id: 'cl1',
        type: 'classification',
        question: 'Classify each statement into the appropriate category of matter.',
        statements: [
          'Water at room temperature',
          'Oxygen in the air',
          'A granite rock',
          'Steam from a kettle'
        ],
        categories: ['Solid', 'Liquid', 'Gas'],
        answer: ['Liquid', 'Gas', 'Solid', 'Gas']
      },
    
      {
        id: 'ct1',
        type: 'choosingTitles',
        question: 'Choose the most appropriate title for each paragraph.',
        paragraphs: [
          'The cell membrane is a biological membrane that separates the interior of all cells from the outside environment. The cell membrane is selectively permeable to ions and organic molecules and controls the movement of substances in and out of cells.',
          'The nucleus is a membrane-bound organelle found in eukaryotic cells. Its main function is to regulate gene expression and coordinate cell activities such as growth, protein synthesis, and cell division.',
          'Mitochondria are often referred to as the powerhouses of the cell. They generate most of the cell\'s supply of adenosine triphosphate (ATP), used as a source of chemical energy.'
        ],
        titles: [
          'The Gateway to the Cell',
          'Control Center of Life',
          'Cellular Power Plant',
          'Building Blocks of Life'
        ],
        answer: ['The Gateway to the Cell', 'Control Center of Life', 'Cellular Power Plant']
      },
    
      // Diagram Labeling
      {
        id: 'dl1',
        type: 'diagramLabeling',
        question: 'Label the parts of the plant cell.',
        diagramUrl: '/api/placeholder/600/400',
        labelPoints: [
          { x: 20, y: 30 },
          { x: 50, y: 50 },
          { x: 80, y: 70 },
          { x: 40, y: 80 }
        ],
        wordLimit: 2,
        answer: ['nucleus', 'cell wall', 'chloroplast', 'mitochondria']
      }
    ];
    

  
  
  
    const passages = {
      text1: {
        "Passage1": "A. Independent travel is on the increase and while package holidays which offer an all inclusive price for transport, accommodation and often even food are financially attractive to many, according to tourism analyst Thomas Cooper, an increasing number of people now prefer a less-tailored holiday and the freedom to make spur of the moment decisions and changes to their intended plan.",
        "Passage2": "B. Internet based information sites about backpacking destinations are prolific and publications aimed at independent travellers on a budget exist for almost every destination imaginable. Some people, particularly first-time backpackers, may elect to travel with a friend or acquaintance; however, a large percentage of backpackers travel alone, assured by the knowledge that they are likely to meet, with ease, a number of like-minded individuals throughout their journey and staying in their backpacker accommodation. Alan Park, who has travelled extensively through Europe, Australasia and several other parts of the globe, says most accommodation establishments aimed at the backpacker market are designed with communal kitchens, dormitories and entertainment areas which lend themselves to allowing residents to socialize with ease and quickly breakdown barriers with strangers that may usually exist in day to day life.",
        "Passage3": "C. Many backpackers of European origin are attracted to the Southern Hemisphere, Australia being a major destination of choice. Cooper attributes this high level of interest to the possibilities of legal working holiday visas for many nationalities and consequent short-term work opportunities making extended travel financially feasible, in addition to the attractive climate and outback appeal. Australia also has the reputation of being a relatively safe destination, with a warm and jovial population and its size and contrast between locations is alluring to many. University student Rebecca Thompson, who has just returned from a twelve month overseas trip, says that the cosmopolitan and modern nature of Australian cities such as Sydney and Melbourne contrasted with the rugged outback appeal of Western Australia and the Northern Territory, or the marine paradise of the Great Barrier Reef offer sufficient variation to attract a wide base of visitors. Sydney based travel consultant Brad Connor advises that it is also possible to obtain bargain deals on internal flights within this massive island when purchasing an international ticket, highly recommended, he says, for those who do not have the luxury of a long length of time, in order to ensure that key spots can be visited.",
        "Passage4": "D. Equal in popularity to Australia, for the backpacking market is South East Asia and Rebecca Thompson says that, in her experience, the majority of travellers on extended trips to Australasia also include a visit to one or more South East Asia destinations in their itinerary. Thailand, in particular, has a long tourism history and well-established service industry. It is often considered one of the more accessible Asian destinations for the novice European backpacker due to its reasonable prices, large volume of Western visitors and well established backpacker trails. Brian Johnson, who is currently employed by the British Consulate in Bangkok, believes that the welcoming nature and level of English spoken by Thais involved in the tourism industry has also impacted positively on the destination’s overseas image. Thai food is delicious and now fairly familiar to those outside the country and while precautions such as drinking bottled water and washing of fruit and vegetables should be practiced, generally standards of accommodation and restaurants are high. Thomas Cooper says Thailand’s attractions are wide ranging, encompassing idyllic beaches, an insight into Buddhist culture and impressive ancient temples, mountain trekking, a vibrant nightlife and for bargain hunters bustling night markets and bazaars.",
        "Passage5": "E. South East Asia neighbour, Vietnam, alongside its rapidly developing economy has also over recent years established a solid tourism industry, the majority of visitors entering and exiting by plane via its urban centres Ho Chi Minh (formerly Saigon) in the south and Hanoi in the north. Vietnam offers incredible vistas and contrasts of rugged mountain areas, lush green rice paddies, crystal clear waters and dense forest areas. Alan Park, who spent a month travelling independently around the country, says bus and rail networks allow visitors to travel from centre to centre relatively inexpensively, though he does not recommend these forms of transport to visitors on a short time-frame as the pace is unhurried.",
        "Passage6": "F. The list of potentially safe and enjoyable backpacking destinations is endless. Technology and transport developments over recent time have resulted in more areas of the world becoming increasingly accessible, it is now possible to keep in regular contact with friends and family back home via email or even mobile phone, providing added reassurance to those concerned about travelling and their worried parents. Brian Johnson says friends, family and acquaintances who have previously travelled to the destination of choice are a useful source of first-hand advice and information and Simon Hartwell of the Backpackers Association adds travellers are advised to ensure that they are aware of visa requirements for their destination and are urged to seek medical advice regarding any necessary vaccinations or medical precautions. It is always wise to be as well informed as possible prior to embarking on a trip.",
        "Passage7": "G. The youth of today are undoubtedly becoming more adventurous, which Hartwell ascribes to higher disposable income in the developed world than were available to previous generations and also the fact that we can more easily familiarise ourselves with the unknown via the internet and other communication methods. Many travellers, particularly experienced backpackers, are keen to experience more obscure destinations well off the well-trodden backpacker trail."
      },
      text2: {
        "Passage1": "A. The Supermarine Spitfire was a single-seater fighter plane used by the British Royal Airforce and pilots from a number of the country’s allies during the Second World War. The first flight of a Spitfire prototype was on 5 March 1936 and usage of the plane continued until the 1950s. It was said to be one of the most effective fighter planes available during that period and was produced by Vickers-Armstrongs, a British engineering corporation which was formed in 1927 as a result of the merger of Vickers Limited and Sir W G Armstrong Whitworth & Company.",
        "Passage2": "B. The Spitfire was designed by aeronautical engineer Reginald Joseph Mitchell. His career began when he joined a locomotives engineering company in 1911 at the age of 16. However, in 1917 he moved from his home town to join the Supermarine Aviation works in Southampton and was promoted to Chief Designer within his first year of employment. By the time the company was taken over by Vickers-Armstrongs in 1928, Mitchell had held the post of Technical Director for a year; and his capabilities and contributions were deemed so significant Vickers-Armstrong made his continual employment for a five year period a condition of the purchase of the company.",
        "Passage3": "C. In the fifteen years prior to 1936 Mitchell designed 24 aircraft of differing categories including fighter planes, bombers and seaplanes. The first predecessor of the Spitfire in the fighter plane category to gain him national acclaim was the Supermarine S.B for which he won the Schneider Trophy (a cup and monetary award for technical advances in aviation which came to focus mainly on speed) in 1931. Despite withdrawal of financial support from the British Government that year, the Supermarine S.B. was able to compete for the Schneider Trophy as a result of a private donation of 100,000 pounds. Mitchell’s team won outright on September 13th their aircraft achieving a new world speed record of 606 km/h; within days the Supermarine S.B. went on to break its own newly achieved record when on the 29th of the same month it became the first aircraft ever to achieve speeds of over 400 miles per hour (640 kilometres) when it reached 407.5 mph (640 kilometres per hour).",
        "Passage4": "D. Reginald Joseph Mitchell was awarded a CBE in 1932 for his contributions to high speed flight. CBEs being awarded by the British Monarch and reserved to recognise individuals who have ‘fulfilled a conspicuous leading role in regional affairs, through achievement or service to the community, or making a highly distinguished, innovative contribution in his or her area of activity’. Mitchell’s achievements with the Supermarine S.B. also prompted the Air Ministry to contract his company for design of a new fighter aircraft, despite the organisation’s reputation being built predominantly on sea-plane and not fighter plane manufacturing.",
        "Passage5": "E. The first type, the 224, was to prove unsuccessful and it was eventually rejected by the Royal Air Force due to unsatisfactory performance; however, private sponsorship enabled research, development and modifications which led to the creation of the Type 300 which would eventually become the Spitfire. Soon after the first flight of the Spitfire prototype (trial version) and prior to completion of all stages of its official trials, convinced by its potential, the British Royal Air Force ordered 310 models. With its smooth lines, load-bearing metal shell, and heavy eight-machine gun armament, the Spitfire was considered revolutionary. In 1938, the aircraft was first put into official service; however, Mitchell, who died from cancer in 1937 at the age of 42, was not to witness this or the extensive impact and longevity of use the aircraft would have. In total 20,351 spitfires of different versions were produced making it the most produced British aircraft of the Second World War.",
        "Passage6": "F. Despite the Spitfire’s success, Reginald Joseph Mitchell is often regarded as an unsung hero of aviation history. There are few references to his achievements outside of aviation circles and the achievements of his successor are more frequently discussed. Mitchell’s achievements were recognized later, with his name being honored by the Spitfire Awards given annually to individuals and organizations who contribute significantly to the field of aeronautical engineering."
      }
      ,
      text3: {
        "Passage1": "Tornados have been observed in every continent on the planet with the exception of Antarctica. Hurricanes differ from tornadoes, in that the former develop in warm, tropical oceans whereas tornados develop on land and are more aggressive and potentially destructive. The majority of tornados are initiated by thunderstorms. Tornados are relatively common occurrences at differing magnitudes throughout the world. The geographical features of the U.S.A. lend themselves to high incidence of tornado activity. In that country the highest proportion of tornados occur in the southern states in spring from March to May and in the northern states from late spring extending into summer. Generally tornados travel from southwest to northeast, though neither time of year nor direction they will take is completely predictable.",
        "Passage2": "Several factors cause the U.S.A. to experience a high incidence of tornado formation. While the continent reaches from arctic areas in the north to a tropical climate in the south there is no barrier protection from significant mountain ranges in the east or west; however, the Rocky Mountains in the middle latitudes of the country obstruct atmospheric flow and moisture. In addition, drier air from the southwest deserts and low level moisture from the Gulf of Mexico meet in the area, many collisions of warm and cool air occur and optimum conditions for tornado formation are created. Tornados in this central part of the U.S.A. are so prolific that the area has been named Tornado Alley, the site of the highest number of powerful tornados in the country and throughout the world. In the USA alone, in an average year 1200 tornados occur causing 70 fatalities and 1500 injuries and in addition extensive damage to property and natural vegetation.",
        "Passage3": "Connected between a cloud base above (usually cumulonimbus) and the earth below, a tornado is a rapidly rotating column of air; they can be as much as 20 kilometres in height. The majority are less than 75 metres in diameter reaching wind speeds of less than 177kms per hour and travel less than 10 kilometres before dissipating; however, some of the larger and rarer of this type of weather phenomenon may reach wind speeds of more than 480kms/hour traveling more than 100 kilometers before cessation. The inside of a tornado is made up of descending air and this is surrounded by a spiraling upward current which has the ability to carry with it and destroy even substantial obstacles such as tress, cars and houses in its path. Scientific research and eyewitness accounts indicate that most tornados also possess a calm centre in their core, surrounded by the layers of the downward and upward currents of air; this core has been likened to the peaceful central ‘eye’ at the centre of a tropical cyclone or hurricane.",
        "Passage4": "A tornado itself is not necessarily visible; though the intense low pressure it causes often results in condensation of water vapour which forms into a noticeable condensation funnel. Colours of tornados are also dictated by the environment in which they form. The force of the swirling air causes them to pick up dirt as they travel across the landscape; those with minimal debris remaining grey or white turning darker blue the more they collect, while others in areas such the Great Plains in the USA turn red in colour due to the red soil they collect and carry with them. Background lighting in which a tornado presents itself also affects the naked eye’s ability to identify its form as it appears on the horizon. When viewing a tornado with the sun behind it, it will appear to be dark in colour; however, when viewed without the sun in the background, the same tornado appears to be grey or white. On the rare occasions that tornados occur after dark, they pose an increased level of danger as darkness can make them invisible and only radar warnings or possibly sound can warn those in their path that a tornado is on its way.",
        "Passage5": "Tornados are classified into three levels of intensity; these being weak, strong and violent. 88% of tornados occurring in the USA are classified into the first category making them the most common; they account for less than 5% of fatalities resulting from tornado activity, generally reach wind speeds of less than 177kms/hour and have a duration of between 1 and 10 minutes before cessation. In contrast, ‘violent’ tornados exceed 330 kilometres per hour, can continue for over an hour and while they account for only 1% of incidence of tornados they result in approximately 70% of resultant deaths. The greatest devastation to date, inflicted on the USA by a violent tornado was on March 18th, 1925. The tornado was the longest, fastest and widest tornado known to have formed in North America and resulted in 695 deaths, an additional 2279 being injured. Now known as the Tri-state Tornado, it travelled over 350 kilometres affecting 13 counties in the three different states of Missouri, Illinois and Indiana. Around 11% of tornados are classified as ‘strong’ tornados. These tornados account for slightly more than 25% of tornado-related fatal accidents and reach mid-range speeds of between 177 and 330 kilometres per hour with an average duration of around 20 minutes.",
        "Passage6": "Today in the USA, early warning systems, which cannot necessarily protect property in the path of a tornado, can allow people time to leave the area and therefore significantly reduce death tolls. However in countries such as Bangladesh, fatalities caused by tornado impact remain extremely high. The rural, central region of the country also experiences a high frequency of strong tornados and the danger is exacerbated due to its densely populated areas, lack of warning systems and vulnerability of building structures. Between 1967 and 1996 the Bangladesh Observer and Pakistan Observer reported 5,373 tornado related deaths: an average of 179.1 per year. The Manikganj Tornado which occurred in 1989 is thought to have caused as many as 1300 deaths and is known as the deadliest tornado to have occurred anywhere in the world. Many projects delivered by organizations such as the Asian Disaster Reduction Centre (ADRC) have been established with the aim of minimising devastation and death rates caused by tornados in such areas."
      }
    }
  
    const [answers, setAnswers] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const handleAnswerChange = (questionId, answer) => {
      setAnswers(prevAnswers => ({
        ...prevAnswers,
        [questionId]: answer
      }));
    };
  
    const handleSubmit = () => {
      setIsSubmitted(true);
    };
  
 
  
    const renderFeedback = (item) => {
      if (!isSubmitted) return null;
    
      const userAnswer = answers[item.id];
      const correctAnswers = Array.isArray(item.answer) ? item.answer : [item.answer];
      const userAnswers = Array.isArray(userAnswer) ? userAnswer : [userAnswer];
    
      return (
        <div className="mt-4 p-4 border rounded">
          <div className="font-medium space-y-2">
            {userAnswers.map((answer, index) => {
              const isCorrectAnswer = answer === correctAnswers[index];
              return (
                <div key={index} className="flex justify-between items-center">
                  <span>Question {index + 1}:</span>
                  <span className={isCorrectAnswer ? 'text-green-600' : 'text-red-600'}>
                    {answer || 'No answer'}
                    {!isCorrectAnswer && (
                      <span className="ml-2">
                        (Correct: <span className="text-green-600">{correctAnswers[index]}</span>)
                      </span>
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      );
    };
  
const QuestionRenderer = ({ item, answers, handleAnswerChange }) => {
  {console.log(item)}
  switch (item.type) {
    case 'multipleChoiceSingle':
      return (
        <MultipleChoiceSingle 
          item={item} 
          answers={answers} 
          handleAnswerChange={handleAnswerChange} 
        />
      );

    case 'multipleChoiceMultiple':
      return (
        <MultipleChoiceMultiple 
          item={item} 
          answers={answers} 
          handleAnswerChange={handleAnswerChange} 
        />
      );

    case 'trueFalseNotGiven':
    case 'yesNoNotGiven':
      return (
        <TrueFalseNotGiven 
          item={item} 
          answers={answers} 
          handleAnswerChange={handleAnswerChange} 
        />
      );

    case 'matching':
      return (
        <Matching 
          item={item} 
          answers={answers} 
          handleAnswerChange={handleAnswerChange} 
        />
      );

    case 'shortAnswer':
      return (
        <ShortAnswer 
          item={item} 
          answers={answers} 
          handleAnswerChange={handleAnswerChange} 
        />
      );

    case 'sentenceCompletion':
      return (
        <SentenceCompletion 
          item={item} 
          answers={answers} 
          handleAnswerChange={handleAnswerChange} 
        />
      );

    case 'summaryCompletion':
      return (
        <SummaryCompletion 
          item={item} 
          answers={answers} 
          handleAnswerChange={handleAnswerChange} 
        />
      );

    case 'tableCompletion':
      return (
        <TableCompletion 
          item={item} 
          answers={answers} 
          handleAnswerChange={handleAnswerChange} 
        />
      );

    case 'classification':
      return (
        <Classification 
          item={item} 
          answers={answers} 
          handleAnswerChange={handleAnswerChange} 
        />
      );

  

    case 'diagramLabeling':
      return (
        <DiagramLabeling 
          item={item} 
          answers={answers} 
          handleAnswerChange={handleAnswerChange} 
        />
      );

    default:
      return (
        <div className="p-4 bg-yellow-100 rounded">
          <p className="text-yellow-800">
            Unknown question type: 
          </p>
        </div>
      );
  }
};
  
    return (
      <div className=" w-[50%] mx-auto  p-6">
        {data.map((item, index) => (
          <div key={item.id} className="mb-8 p-6 border rounded-lg">
            {/* Render passage if needed */}
           {(index === 0) && (
            <>
              {Object.entries(passages.text1).map(([key, text],) => (

                <div key={key} className="passage-container">
                  <p>{text}</p>
                </div>

              ))}
            </>
          )}
          {(index === 3) && (
            <>
              {Object.entries(passages.text2).map(([key, text],) => (

                <div key={key} className="passage-container">
                  <p className="passage-title">{key}</p>
                  <p>{text}</p>
                </div>

              ))}
            </>
          )}
          {(index === 6) && (
            <>
              {console.log(passages.text3)}
              {Object.entries(passages.text3).map(([key, text]) => (

                <div key={key} className="passage-container">
                  {console.log({ text })}
                  <p>{text}</p>
                </div>

              ))}
            </>
          )}
            
            {/* Render question */}
            <QuestionRenderer
            item={item} answers={answers}  handleAnswerChange={handleAnswerChange}/>
            
            {/* Render feedback */}
            {renderFeedback(item)}
          </div>
        ))}
        
        <button
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={handleSubmit}
          disabled={isSubmitted}
        >
          {isSubmitted ? 'Submitted' : 'Submit'}
        </button>
      </div>
    );
  };
  
  export default MainComponent;