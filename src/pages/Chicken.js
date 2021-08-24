import Header from "../components/Header";
import Footer from "../components/Footer";
import MainSecond from "../components/MainSecond";
const Chicken = () => {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Main Page */}
      <MainSecond
        desc=" Shawarma is prepared from thin cuts of seasoned marinated  chicken, . The slices are stacked on a skewer about 60 cm (20 in) high. Lamb fat may be added to provide extra fat for juiciness and flavor. A motorized spit slowly turns the stack of meat in front of a heating element, continuously roasting the outer layer. Shavings are cut off the rotating stack for serving, customarily with a long, sharp knife. "
        review="Chicken shawarma (
          شاورما دجاج in arabic) is a delicious quick bite lebanese fast food , it is cheap fufilling and full of flavor, personnally I love it I usually eat it at home put the meat with lettuce, garlic dip (toum) , pickles and fries inside a double pita bread I would definetly recommend anyone to try this delcious sandwich"
        emoji="😋😋😋😋😋"
        imgURL="https://live.staticflickr.com/65535/51395579460_7481d86f01_m.jpg"
      />
      {/* //Footer */}
      <Footer />
    </>
  );
};

export default Chicken;
