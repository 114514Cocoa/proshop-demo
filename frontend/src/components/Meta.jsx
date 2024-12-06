import { Helmet } from "react-helmet-async"

const Meta = ({ title, desciption, keywords }) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={desciption} />
        <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
    title: 'Welcome to Proshop',
    desciption: 'We sell the best products for cheap',
    keywords: 'electronics, buy electronics, cheap electronics',
};

export default Meta