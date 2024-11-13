import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../buttons/Button';
import CustomCard from '../Custom-cards/Visualisierung';
import CustomCard2 from '../Custom-cards/Campaining';
import CustomCard3 from '../Custom-cards/coaching';
import CustomCard4 from '../Custom-cards/enterprise';
import CustomCard5 from '../Custom-cards/course';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

interface coursecard {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  badgeText?: string;
  buttonText: string;
  type: string;
}

const CardPage: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [courses, setCourses] = useState<coursecard[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [cardGroups, setCardGroups] = useState<React.ReactNode[][]>([]);

  useEffect(() => {
    async function fetchCourses() {
      setLoading(true);
      try {
        const response = await fetch('/api/coursecard');
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchCourses();
  }, []);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 640) setCardsPerView(1);
        else if (window.innerWidth < 1024) setCardsPerView(2);
        else setCardsPerView(3);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  useEffect(() => {
    const groups: React.ReactNode[][] = [];
    const cardComponents = courses.map((course, index) => {
      switch (index) {
        case 0:
          return <CustomCard key={course.id} data={course} />;
        case 1:
          return <CustomCard2 key={course.id} data={course} />;
        case 2:
          return <CustomCard3 key={course.id} data={course} />;
        case 3:
          return <CustomCard4 key={course.id} data={course} />;
        case 4:
        default:
          return <CustomCard5 key={course.id} data={course} />;
          
      }
    });

    for (let i = 0; i < cardComponents.length; i += cardsPerView) {
      groups.push(cardComponents.slice(i, i + cardsPerView));
    }
    setCardGroups(groups);
    setCurrentPage(0);
  }, [courses, cardsPerView]);

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return;

    const touchEnd = e.touches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentPage < cardGroups.length - 1) scrollToPage(currentPage + 1);
      else if (diff < 0 && currentPage > 0) scrollToPage(currentPage - 1);
      setTouchStart(0);
    }
  };

  const scrollToPage = (pageIndex: number) => {
    if (scrollRef.current) {
      const scrollAmount = pageIndex * scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      setCurrentPage(pageIndex);
    }
  };

  return (
    <div className="min-h-screen px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          <button
            onClick={() => currentPage > 0 && scrollToPage(currentPage - 1)}
            className="hidden md:flex absolute left-[-45px] top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-gray-800 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentPage === 0}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory overflow-hidden py-8"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            {loading ? (
              <div className="w-full flex justify-center items-center">
                <AiOutlineLoading3Quarters className="animate-spin text-primary" size={40} />
              </div>
            ) : (
              cardGroups[currentPage]?.map((card, index) => (
                <div
                  key={`card-${currentPage}-${index}`}
                  className={`flex-shrink-0 snap-center px-5 md:px-4 ${
                    cardsPerView === 1 ? 'w-full' : cardsPerView === 2 ? 'w-1/2' : 'w-1/3'
                  }`}
                >
                  {card}
                </div>
              ))
            )}
          </div>

          <button
            onClick={() => currentPage < cardGroups.length - 1 && scrollToPage(currentPage + 1)}
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-gray-800 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentPage === cardGroups.length - 1}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="flex justify-center space-x-2 mt-6">
          {cardGroups.map((_, index) => (
            <button
              key={`page-${index}`}
              onClick={() => scrollToPage(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentPage ? 'bg-primary' : 'bg-gray-300'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex justify-center mt-8 px-4">
          <Button key="cta-button" variant="primary" size="large">
            Find the right offer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardPage;
