
"use client"

import {  ChevronRight } from 'lucide-react';
import Link from "next/link";
import { useTranslations } from "next-intl";

type ParamsType = {
  params: {
    locale: string;
  };
};
export default function Home({params}:ParamsType) {
  const t=useTranslations("common");
 
  // const router = useRouter();
  // const [locale, setLocale] = useState(router.locale || 'en');
  // const { theme, setTheme } = useTheme();

  

  // const handleLocaleChange = (locale: string) => {
  //   router.push('/', '/', { locale });
  //   localStorage.setItem('locale', locale);
  //   setLocale(locale);
  // };

  const themes = ['orange', 'blue', 'dark-orange-shade'] as const;

  return (
    <div className="min-h-screen  flex w-full flex-col items-center">
    
      {/* Hero Section */}
   
      <div className="pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center flex flex-col justify-center h-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6">
              {t("Just Do AD Project")}
            </h1>
            <p className="text-xl text-secondary max-w-2xl mx-auto mb-12">
            {t("Discover our amazing components and features")}
            </p>
          </div>
        </div>
      </div>
  
      {/* Components Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">
        {t("Explore Components")}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { href: '/course', title: 'Custom Example Cards', description: 'Explore our comprehensive course catalog' },
            { href: '/table', title: 'Ag Grid-Table', description: 'View and manage data efficiently' },
            { href: '/carouselPage', title: 'Carousel Theme demo', description: 'Interactive content showcase' },
            { href: '/cardForm', title: 'Custom Card Editor', description: 'Build card form' },
            { href: '/cardLangDemo', title: 'Card Language Demo', description: 'Here you can see the language change demo in [spanish , french and english]' },
            { href: '/home', title: 'Home', description: 'Home page' },
            { href: '/login', title: 'Login', description: 'login page' },
          ].map((item) => (
            <Link href={`/${params.locale}/${item.href}`} key={item.href}>
              <div className="group relative bg-surface/50 backdrop-blur-sm rounded-xl p-6 hover:bg-surface/70 transition duration-300">
                <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-tbase mb-4">{item.description}</p>
                <div className="flex items-center text-primary group-hover:text-primary/80">
                  <span className="text-sm font-medium">Learn more</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      
    </div>
  );
}
