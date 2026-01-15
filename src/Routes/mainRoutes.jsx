import Home from "../Pages/Home";
import ContactUs from "../Pages/ContactUs";
import Pricing from "../Pages/Pricing";

export const mainRoutes = [
  {
    path: "/",
    element: <Home />,
    loader: async () => {
      const brandingRes = await fetch("/brands.json");
      const brands = await brandingRes.json();
      const featureRes = await fetch("/features.json");
      const features = await featureRes.json();
      const reviewRes = await fetch("/reviews.json");
      const reviews = await reviewRes.json();
      const tenFeatureRes = await fetch("/tenFeatures.json");
      const tenFeatures = await tenFeatureRes.json();
      return { brands, features, reviews, tenFeatures };
    },
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },

  {
    path: "/contact",
    element: <ContactUs />,
  },
];
