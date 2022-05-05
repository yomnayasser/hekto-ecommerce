<template>
  <div>
    <Headerbar />
    <Navbar />
    <Carousel />
    <div>
      <Header title="Featured Products" />
      <div class="continer">
        <FeaturedCard
          v-for="card in FeaturedProducts.slice(sliderStart, sliderEnd)"
          :key="card.code"
          :name="card.name"
          :colors="card.colors"
          :code="card.code"
          :price="card.price"
          :image="require('../assets/'+card.image+'.png')"
        />
      </div>
    </div>
    <div v-if="FeaturedProducts.length <= 4">
      <RectangeSlider />
    </div>
    <div v-else  class="tabs">
      <RectangeSlider
        v-for="(i, index) in Math.ceil(FeaturedProducts.length / 4)"
        :key="i"
        :index="index"
        :className="className"
        :FeaturedProductsID="FeaturedProductsID"
        @click="tabclick();calculateSlide(index) "
      />
    </div>
    <div>
      <Header title="Leatest Products"/>
      <div class="tabs">
          <WordSlider v-for="type in ProductsType " :key="type" :title="type"/>
      </div>
      <div class="rowsCloumn">
           <LeatestPCard v-for="product in LeatestProducts" 
           :key="product.code" 
           :name="product.name" 
           :price="product.price"
          :image="require('../assets/'+product.image+'.png')"
           :sale="product.sale"/>
      </div>
    </div>
    <div>
      <Header title="What Shopex Offer!"/>
      <div class="tabs">
         <SupportCard v-for="card in SupportProducts" :key="card.img" :name="card.name" :desc="card.desc" :img="require('../assets/'+card.img+'.png')"/>
      </div>
     
    </div>
    <div>
      <TallAd :descrption="Ad" name="B&B Italin Sofa" price="32.00"/>
    </div>
  </div>
</template>

<script>
import Headerbar from "../components/Headerbar.vue";
import Navbar from "../components/Navbar.vue";
import Carousel from "../components/Carousel.vue";
import Header from "../components/Header.vue";
import FeaturedCard from "../components/Cards/FeaturedPCard.vue";
import RectangeSlider from "../components/Sliders/RectangeSlider.vue";
import WordSlider from "../components/Sliders/WordSlider.vue";
import LeatestPCard from "../components/Cards/LeatestPCard.vue";
import SupportCard from "../components/Cards/SupportCard.vue";
import TallAd from "../components/Ads/TallAd.vue";
export default {
  data() {
    return {
      sliderStart: 0,
      sliderEnd: 4,
      FeaturedProductsID: null,
      className:'slider',
      FeaturedProducts: [
        {name: "Cantilever chair",colors: ["#05E6B7", "#F701A8", "#00009D"],code: "Y523201",price: "42.00",image:"FeaturedChair1"},
        {name: "Cantilever chair",colors: ["#05E6B7", "#F701A8", "#00009D"],code: "Y523202",price: "42.00",image:"FeaturedChair2"},
        {name: "Cantilever chair",colors: ["#05E6B7", "#F701A8", "#00009D"],code: "Y523203",price: "42.00",image:"FeaturedChair3"},
        {name: "Cantilever chair",colors: ["#05E6B7", "#F701A8", "#00009D"],code: "Y523204", price: "42.00",image:"FeaturedChair4"},

        {name: "Cantilever chair", colors: ["#05E6B7", "#F701A8", "#00009D"],code: "Y523205", price: "42.00",imimageg:"FeaturedChair1"},
        {name: "Cantilever chair",colors: ["#05E6B7", "#F701A8", "#00009D"],code: "Y523206", price: "42.00",image:"FeaturedChair2"},
        {name: "Cantilever chair", colors: ["#05E6B7", "#F701A8", "#00009D"],code: "Y523207", price: "42.00",image:"FeaturedChair3"},
        {name: "Cantilever chair",colors: ["#05E6B7", "#F701A8", "#00009D"],code: "Y523208", price: "42.00",image:"FeaturedChair4"},

        {name: "Cantilever chair", colors: ["#05E6B7", "#F701A8", "#00009D"],code: "Y523209", price: "42.00",image:"FeaturedChair1"},
        {name: "Cantilever chair",colors: ["#05E6B7", "#F701A8", "#00009D"],code: "Y523210", price: "42.00",image:"FeaturedChair2"},
        {name: "Cantilever chair", colors: ["#05E6B7", "#F701A8", "#00009D"],code: "Y523211", price: "42.00",image:"FeaturedChair3"},
        {name: "Cantilever chair",colors: ["#05E6B7", "#F701A8", "#00009D"],code: "Y523212", price: "42.00",image:"FeaturedChair4"},

        {name: "Cantilever chair",colors: ["#05E6B7", "#F701A8", "#00009D"],code: "Y523213", price: "42.00",image:"FeaturedChair1"},
      ],
      ProductsType:['New Arrival','Best Seller','Featured','Special Offer'],
      LeatestProducts:[
          { name: "Comfort Handy Craft",price: "42.00",sale:"65",code:1,image:"LeatesChair1"},
          { name: "Comfort Handy Craft",price: "42.00",sale:"65",code:2,image:"LeatesChair4"},
          { name: "Comfort Handy Craft",price: "42.00",sale:"65",code:3,image:"LeatesChair3"},
          { name: "Comfort Handy Craft",price: "42.00",sale:"65",code:4,image:"LeatesChair4"},
          { name: "Comfort Handy Craft",price: "42.00",sale:"65",code:5,image:"LeatesChair5"},
          { name: "Comfort Handy Craft",price: "42.00",sale:"65",code:6,image:"LeatesChair6"},
      ],
      SupportProducts:[
        {name:'24/7 Support',desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, repudiandae?',img:'free-delivery'},
        {name:'24/7 Support',desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, repudiandae?',img:'cashback'},
        {name:'24/7 Support',desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, repudiandae?',img:'premium-quality'},
        {name:'24/7 Support',desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, repudiandae?',img:'24-hours-support'}
      ],
      Ad:["Lorem ipsum dolor sit amet consectetur,  elit. Officiis, repudiandae","Lorem ipsum  sit amet consectetur, adipisicing elit. Officiis, repudiandae","Lorem ipsum dolor sit amet consectetur, adipisicing elit. , repudiandae"]
    };
  },
  components: {
    Headerbar,
    Navbar,
    Carousel,
    Header,
    FeaturedCard,
    RectangeSlider,
    WordSlider,
    LeatestPCard,
    SupportCard,
    TallAd
  },
  methods: {
    calculateSlide(num) {
      if (num === 0) {
        this.sliderStart = 0;
        this.sliderEnd = 4;
      }
      else{
          this.sliderStart = num * 4;
      this.sliderEnd = (4 + num * 4) / num;
      this.sliderEnd*=num
      }
      
    },

    tabclick() {
        this.className="sliderClick"
    },
  },
};
</script>

<style scoped>
.continer {
  display: flex;
  width: 100%;
  justify-content: center;
}
.tabs{
  display:flex;
  width: 100%;
  justify-content: center;
  margin-top: 20px;
}
.rowsCloumn
{
  display: grid;
   grid-template-columns: repeat(3, 0fr);
    grid-template-rows: repeat(2, auto);
    gap: 1.75rem;
    margin-top: 30px;
    justify-content: center;
  
}
</style>
