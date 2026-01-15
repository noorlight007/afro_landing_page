import React from "react";

const BlogContent = ({ content }) => {
  const {
    introduction,
    technology,
    consumer_frustrations,
    industry_transformation,
    natural_products,
    Unmatched_Value,
    Client_Experience,
    future,
  } = content || {};

  return (
    <>
      <div className="flex flex-col gap-14 mt-5">
        {/* Introduction */}
        <p className="text-sm opacity-70">{introduction}</p>

        {/* Origin History */}
        <section>
          {Object.entries(content.origin).map(([origin, desc]) => (
            <div key={origin}>
              <h2 className="font-bold text-xl mb-4">{origin}</h2>
              {desc.map((paragraph, index) => (
                <p key={index} className="text-sm opacity-70 mb-3">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </section>

        {/* Empowering Salons with Cutting-Edge Technology */}
        {technology && (
          <section>
            <h2 className="text-xl font-semibold mb-4">
              Empowering Salons with Cutting-Edge Technology
            </h2>
            <div className=" space-y-3">
              {Object.entries(technology).map(([feature, description]) => (
                <div key={feature} className="text-sm opacity-70">
                  <strong>{feature}:</strong> {description}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Consumer Frustrations */}
        {consumer_frustrations && (
          <section>
            <h2 className="text-xl font-bold mb-4">
              Consumers' Frustrations in the Journey
            </h2>
            <div className="text-sm opacity-70 space-y-3">
              <p>
                For decades, consumers with Afro-textured hair faced numerous
                challenges, including:
              </p>
              {Object.entries(consumer_frustrations).map(([issue, detail]) => (
                <div key={issue}>
                  <strong>{issue}:</strong> {detail}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Industry Transformation Section */}
        {industry_transformation && (
          <section>
            <h2 className="text-xl font-bold mb-4">
              The Industry's Transformation and Growing Market Size
            </h2>
            <div className="text-sm opacity-70 space-y-3">
              <p>{industry_transformation.growing_market_size}</p>
              {Object.entries(industry_transformation.consumer_trends).map(
                ([trend, description]) => (
                  <div key={trend}>
                    <strong>{trend}:</strong> {description}
                  </div>
                )
              )}
            </div>
          </section>
        )}

        {/* Natural Products at the Forefront */}
        {natural_products && (
          <section>
            <h2 className="text-xl font-bold mb-4">
              Natural Products at the Forefront
            </h2>
            <div className="text-sm opacity-70 space-y-3">
              <p>{natural_products.des}</p>
              {Object.entries(natural_products.key).map(([ingredient, des]) => (
                <div key={ingredient}>
                  <span className="font-bold">{ingredient}:</span> {des}
                </div>
              ))}
              <p>{natural_products.benefits}</p>
            </div>
          </section>
        )}

        {/* Unmatched Value for Salons */}
        {Unmatched_Value && (
          <section>
            <h2 className="text-xl font-bold mb-4">
              Unmatched Value for Salons
            </h2>
            <p className="text-sm opacity-70">{Unmatched_Value}</p>
          </section>
        )}

        {/* Transforming the Client Experience */}
        {Client_Experience && (
          <section>
            <h2 className="text-xl font-bold mb-4">
              Transforming the Client Experience
            </h2>
            <p className="text-sm opacity-70">{Client_Experience}</p>
          </section>
        )}

        {/* Future of the Industry Section */}
        <section>
          {Object.entries(future).map(([future, desc]) => (
            <div key={future}>
              <h2 className="font-bold text-xl mb-4">{future}</h2>
              {desc.map((paragraph, index) => (
                <p key={index} className="text-sm opacity-70">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default BlogContent;
