import React from "react";

const sources = [
  {
    type: "References",
    content: [
      "Bamgbose, Ayo, et al. New Englishes : A West African Perspective. Trenton, Africa World Press, 1997",
      "“Cameroonian English.” Wikipedia, 28 June 2020, en.wikipedia.org/wiki/Cameroonian_English.",
      "Dr. Y. “Nigerian Words in the English Dictionary.” African Heritage, 3 Feb. 2020, afrolegends.com/2020/02/03/nigerian-words-in-the-english-dictionary/.",
      "Echu, George. “The Language Question in Cameroon.” Linguistik Online, vol. 18, 1 Jan. 2004, bop.unibe.ch/linguistik-online/article/view/765/1310, https://doi.org/10.13092/lo.18.765.",
      "Epoge, Napoleon. “Slang in Cameroon Pidgin English.” Global Journal of HUMAN SOCIAL SCIENCE Linguistics & Education, vol. 13, no. 5, 2013, globaljournals.org/GJHSS_Volume13/4-Slang-in-Cameroon-Pidgin-English.pdf.",
      "Farley, Hannah. Religion and Language: The Two Tactics Used by the British to Colonize Kenya. May 2019.",
      "Fonkeu, Bridget. “Gateway to World Englishes.” Www.ruhr-Uni-Bochum.de, 2010, www.ruhr-uni-bochum.de/wegate/Africa/Cameroon.html#:~:text=English%20first%20arrived%20in%20Cameroon.",
      "“Kenyan English.” Wikipedia, 6 Oct. 2022, en.wikipedia.org/wiki/Kenyan_English.",
      "“Language Data for Cameroon.” Translators without Borders, translatorswithoutborders.org/language-data-for-cameroon.",
      "Mbufong, Paul. “The Cameroonization of English.” US-China Foreign Language, vol. 11, no. 6, June 2013, pp. 475–482, www.davidpublisher.com/Public/uploads/Contribute/552f710e963cf.pdf.",
      "Menang, Thaddeus. ENGLISH in CAMEROON: TYPOLOGY, STATUS and USE.",
      "Michieka, Martha Moraa. “English in Kenya: A Sociolinguistic Profile.” World Englishes, vol. 24, no. 2, June 2005, pp. 173–186, https://doi.org/10.1111/j.1467-971x.2005.00402.x.",
      "Mworia, Ruth. USE of ENGLISH NEOLOGISMS in SOCIAL MEDIA: A CASE of TWITTER LANGUAGE in KENYA a PROJECT SUBMITTED in PARTIAL FULFILMENT of the REQUIREMENTS for the AWARD of MASTERS of ARTS DEGREE, DEPARTMENT of LINGUISTICS and LANGUAGES: UNIVERSITY of NAIROBI. 2015.",
      "Nana, Genevoix. “Language Ideology and the Colonial Legacy in Cameroon Schools: A Historical Perspective.” Journal of Education and Training Studies, vol. 4, no. 4, 16 Feb. 2016, https://doi.org/10.11114/jets.v4i4.1385.",
      "“Nigeria: Languages by Number of Speakers 2021.” Statista, Dec. 2022, www.statista.com/statistics/1285383/population-in-nigeria-by-languages-spoken/#:~:text=Following%20this%20were%20Yoruba%2C%20Nigerian.",
      "“Nigerian English.” Wikipedia, 22 Sept. 2020, en.wikipedia.org/wiki/Nigerian_English.",
      "Nkwain, Joseph. “Current Insights into the Evolution of Cameroon English: The Contribution of the “Anglophone Problem.”” ATHENS JOURNAL of HUMANITIES & ARTS, vol. 9, no. 3, 16 Feb. 2022, pp. 233–260, https://doi.org/10.30958/ajha.9-3-3.",
      "Osoba, Joseph Babasola, and Tajudeen Afolabi Alebiosu. “Language Preference as a Precursor to Displacement and Extinction in Nigeria: The Roles of English Language and Nigerian Pidgin.” Journal of Universal Language, vol. 17, no. 2, Sept. 2016, pp. 111–143, https://doi.org/10.22425/jul.2016.17.2.111.",
      "Oxford University Press. “Nigerian English.” Www.oed.com, www.oed.com/discover/nigerian-english/?tl=true.",
      "---. “Nigerian English in the OED January 2020 Update.” Oed.com, 2020, www.oed.com/discover/nigerian-english-in-the-oed.",
      "Reuben Kenrick Udo, and Toyin O Falola. “Nigeria - Nigeria as a Colony.” Encyclopædia Britannica, 16 Jan. 2019, www.britannica.com/place/Nigeria/Nigeria-as-a-colony.",
      "Safotso, Gilbert Tagne. “Neologisms and Cameroonisms in Cameroon English and Cameroon Francophone English.” Theory and Practice in Language Studies, vol. 10, no. 10, 1 Oct. 2020, p. 1210, https://doi.org/10.17507/tpls.1010.04.",
      "Schneider, Edgar W. English around the World : An Introduction. Cambridge, Cambridge University Press, 2011, pp. 142–157.",
      "Ugwuanyi, Kingsley. “Introduction to Nigerian English.” Www.oed.com, www.oed.com/discover/introduction-to-nigerian-english."
    ],
  },
  {
    type: "Videos",
    content: [
      "Source 1",
      "Source 2",
      // Add more references as needed
    ],
  },
  {
    type: "Images",
    content: [
      "Source 1",
      "Source 2",
      // Add more references as needed
    ],
  },
  {
    type: "Literature",
    content: [
      "Source 1",
      "Source 2",
      // Add more references as needed
    ],
  },
];

const ViewSources = () => {
  return (
    <div className="about-container neumorphic-container">
      <h2 className="fancy-heading">View Sources</h2>
      <p>
        This is a list of the resources used in this application!
        <br />
        {sources.map((source, index) => (
          <div key={index} className="sources">
            <h3>{source.type}</h3>
            <ul>
              {source.content.map((item, i) => (
                <><li key={i}>{item}</li></>
              ))}
            </ul>
          </div>
        ))}
      </p>
    </div>
  );
};

export default ViewSources;
