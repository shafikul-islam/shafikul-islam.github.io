import React from "react";

const Publications = () => {
  return (
    <div className="max-w-2xl mx-auto my-8 p-4 bg-white rounded shadow">
      {/* Semantic Scholar */}
      <h2 className="text-2xl font-bold mb-4">Publications related profile:</h2>
      <ul className="list-disc pl-6">
        <li>
          <a
            href="https://www.semanticscholar.org/author/MD-Shafikul-Islam/2244783507"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            SEMANTIC SCHOLAR
          </a>
        </li>
        <li>
          <a
            href="https://www.researchgate.net/profile/Md-Islam-2168"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            RESEARCH GATE
          </a>
        </li>
        <li>
          <a
            href="https://openreview.net/profile?id=~MD_Shafikul_Islam1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Open Review
          </a>
        </li>
      </ul>

      {/* Conference Proceedings */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Conference Proceedings:</h2>
        <p>
          <a
            href="https://arxiv.org/abs/2311.00983"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Optimizing Inventory Routing: A Decision-Focused Learning Approach
            using Neural Networks
          </a>
          <br />
          MD Shafikul Islam, Azmine Toushik Wasi
          <br />
          In New in Machine Learning Workshop, NeurIPS 2023.
        </p>
        <details className="mt-4">
          <summary className="text-blue-500 cursor-pointer">Abstract</summary>
          <p className="text-gray-800 mt-2">
            Inventory Routing Problem (IRP) is a crucial challenge in supply
            chain management as it involves optimizing efficient route selection
            while considering the uncertainty of inventory demand planning. To
            solve IRPs, usually a two-stage approach is employed, where demand
            is predicted using machine learning techniques first, and then an
            optimization algorithm is used to minimize routing costs. Our
            experiment shows machine learning models fall short of achieving
            perfect accuracy because inventory levels are influenced by the
            dynamic business environment, which, in turn, affects the
            optimization problem in the next stage, resulting in sub-optimal
            decisions. In this paper, we formulate and propose a
            decision-focused learning-based approach to solving real-world IRPs.
            This approach directly integrates inventory prediction and routing
            optimization within an end-to-end system potentially ensuring a
            robust supply chain strategy
          </p>
        </details>
        <details className="mt-2">
          <summary className="text-blue-500 cursor-pointer">BibTeX</summary>
          <pre className="bg-gray-100 p-4 mt-2 overflow-auto text-sm">
            {`@inproceedings{
            title={Optimizing Inventory Routing: A Decision-Focused Learning Approach using Neural Networks},
            author={MD Shafikul Islam and Azmine Toushik Wasi},
            booktitle={New in Machine Learning Workshop, NeurIPS 2023},
            year={2023},
            url={https://arxiv.org/abs/2311.00983}
          }`}
          </pre>
        </details>
      </div>

      {/* Supplygraph */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">
          Supplygraph: A Benchmark Dataset for Supply Chain Planning using Graph
          Neural Networks
        </h2>
        <p>
          Azmine Toushik Wasi, MD Shafikul Islam, Adipto Raihan Akib
          <br />
          In Graphs and more Complex structures for Learning and Reasoning
          workshop, AAAI 2024
        </p>
        <details className="mt-4">
          <summary className="text-blue-500 cursor-pointer">Abstract</summary>
          <p className="text-gray-800 mt-2">
            Graph Neural Networks (GNNs) have gained traction across different
            domains such as transportation, bioinformatics, language processing,
            and computer vision. However, there is a noticeable absence of
            research on applying GNNs to supply chain networks. Supply chain
            networks are inherently graph like in structure, making them prime
            candidates for applying GNN methodologies. This opens up a world of
            possibilities for optimizing, predicting, and solving even the most
            complex supply chain problems. A major setback in this approach lies
            in the absence of real-world benchmark datasets to facilitate the
            research and resolution of supply chain problems using GNNs. To
            address the issue, we present a real-world benchmark dataset for
            temporal tasks, obtained from one of the leading FMCG companies in
            Bangladesh, focusing on supply chain planning for production
            purposes. The dataset defines nodes as distinct products, production
            facilities, and storage locations interconnected through product
            groups, sub-groups. Additionally, the dataset includes temporal data
            as node features to enable sales predictions, production planning,
            and the identification of factory issues. By utilizing this dataset,
            researchers can employ GNNs to address numerous supply chain
            problems, thereby advancing the field of supply chain analytics and
            planning.
          </p>
        </details>
        <details className="mt-2">
          <summary className="text-blue-500 cursor-pointer">BibTeX</summary>
          <pre className="bg-gray-100 p-4 mt-2 overflow-auto text-sm">
            {`@inproceedings{
            title={Supplygraph: A Benchmark Dataset for Supply Chain Planning using Graph Neural Networks},
            author={Azmine Toushik Wasi, MD Shafikul Islam, Adipto Raihan Akib},
            booktitle={Graphs and more Complex structures for Learning and Reasoning workshop, AAAI 2024}
          }`}
          </pre>
        </details>
      </div>

      {/* Multivariate Time Series Analysis */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">
          Multivariate Time Series Analysis and Forecasting on Air Quality Index
          with Industrial Statistics: A Case Study of Bangladesh
        </h2>
        <p>
          MD Shafikul Islam, Azmine Toushik Wasi
          <br />
          In 7th international conference on engineering research, innovation
          and education 2023
        </p>
        <details className="mt-4">
          <summary className="text-blue-500 cursor-pointer">Abstract</summary>
          <p className="text-gray-800 mt-2">
            The Air Quality Index (AQI) analyzes all the observed particles and
            pollutants; converts them to a single scale number to represent how
            fresh or polluted the air is in a particular location. AQI values
            correlated with many factors including environment, manufacturing,
            industrialization, transportation, and weather. In this research, a
            multivariate time series analysis of the Air Quality Index was
            conducted with other statistics such as the Industrial Intensity
            Index, Manufacturing Value Added per capita, Motor Vehicles and CO2
            Emission. These variables are analyzed concerning time to identify
            their relationship with AQI by the Pearson correlation method.
            According to our findings, Manufacturing Value Added and Total Motor
            Vehicles Registered in a Year are highly correlated with AQI, with
            correlation values of 0.84 and 0.85, respectively; defining AQI is
            primarily affected by pollution from transportation and
            manufacturing. The Prophet time series model was also used to learn
            trends and forecast future AQI values. According to the model, the
            AQI value rises from 2016 to 2022 but falls sharply in 2020; the
            average AQI value is predicted to be 178.89 in 2023, which is higher
            than any previous year's value.
          </p>
        </details>
        <details className="mt-2">
          <summary className="text-blue-500 cursor-pointer">BibTeX</summary>
          <pre className="bg-gray-100 p-4 mt-2 overflow-auto text-sm">
            {`@article{
            title={Multivariate Time Series Analysis and Forecasting on Air Quality Index with Industrial Statistics: A Case Study of Bangladesh},
            author={MD Shafikul Islam, Azmine Tousik},
            url={https://www.researchgate.net/publication/367283494_Multivariate_Time_Series_Analysis_and_Forecasting_on_Air_Quality_Index_with_Industrial_Statistics_A_Case_Study_of_Bangladesh}
          }`}
          </pre>
        </details>
      </div>

      {/* Journal Proceedings */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Journal Proceedings:</h2>
        <p>
          Sanatan Sushil, Md Shafikul Islam, Tanjidul Islam, M. SI Khan
          <br />
          In Research Journal of Engineering Sciences
        </p>
        <details className="mt-4">
          <summary className="text-blue-500 cursor-pointer">Abstract</summary>
          <p className="text-gray-800 mt-2">
            The economic outgrowth rate of Bangladesh is on the rise
            drastically, day by day. Productivity is the main engine, and
            modernism is the fuel for operating and expanding this market. To
            boost up the productivity and quality of product lean methodology is
            one of the paramount methods. Lean and green manufacturing can
            simultaneously be used to enhance operational efficiency and
            mitigate waste and emissions. Moreover, Green manufacturing
            integrated with lean can ensure the lowest environmental effect, it
            also helps the sustainable development of modern manufacturing
            companies. The main aim of this research is to implement the "Eco
            Value Stream Mapping" approach in a smaller context in 5 industries
            and try to assess incremental progress. Finally, some obstacles are
            also found in the implementation of green-lean technology, for those
            problems several salient suggestions are suggested.
          </p>
        </details>
        <details className="mt-2">
          <summary className="text-blue-500 cursor-pointer">BibTeX</summary>
          <pre className="bg-gray-100 p-4 mt-2 overflow-auto text-sm">
            {`@article{
            title={Approach of green and lean manufacturing study of the small industries in Bangladesh},
            author={Sanatan Sushil, Md Shafikul Islam, Tanjidul Islam, M. SI Khan},
            journal={Research Journal of Engineering Sciences},
            volume={2278},
            pages={9472}
          }`}
          </pre>
        </details>
      </div>

      {/* Current Research Project */}

      <div className="mt-8">
        <h1 className="text-2xl font-bold mb-4">Menuscript Under Review</h1>
        <h2 className="text-xl font-bold mb-4">Current Research Project:</h2>

        {/* Undergraduate Thesis */}
        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2">1. Undergraduate Thesis:</h3>
          <p className="text-gray-800">
            Utilizing Prescriptive Analytics for Developing an Optimal
            Preparatory Leave Schedule
          </p>
          <p>
            Advisor:{" "}
            <a
              href="https://scholar.google.com/citations?user=HOOJPRYAAAAJ&hl=en&oi=sra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Abul Mukid Md. Mukaddes
            </a>
          </p>
          <p>
            Abul Mukid Md. Mukaddes, MD Shafikul Islam, Mohammad Mejbah Uddin
          </p>
          <details className="mt-2">
            <summary className="text-blue-500 cursor-pointer">
              Short Description
            </summary>
            <p className="text-gray-800 mt-2">
              Our research merges data-driven decision-making and prescriptive
              analytics, focusing on the "Predict, then Optimize" framework. We
              aim to predict academic grades using machine learning and optimize
              preparatory leave for enhanced student performance. This
              pioneering approach addresses a gap in education, aiming to
              revolutionize academic success strategies through personalized,
              data-driven recommendations.
            </p>
          </details>
        </div>

        {/* Evaluating Challenges */}
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-2">
            2. Evaluating Challenges to the Adoption of Smart Textiles in
            Ready-made Garment Industries:
          </h3>
          <p className="text-gray-800">
            Saifur Rahman Tushar, MD Shafikul Islam, MD Emad Uddin Fahim
          </p>
          <details className="mt-2">
            <summary className="text-blue-500 cursor-pointer">
              Short Description
            </summary>
            <p className="text-gray-800 mt-2">
              Our research merges data-driven decision-making and prescriptive
              analytics, focusing on the "Predict, then Optimize" framework. We
              aim to predict academic grades using machine learning and optimize
              preparatory leave for enhanced student performance. This
              pioneering approach addresses a gap in education, aiming to
              revolutionize academic success strategies through personalized,
              data-driven recommendations.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Publications;
