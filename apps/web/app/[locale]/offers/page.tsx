import Button from "@repo/ui/button"
import { coursesData, coachingData, updatedTopics } from "../../../lib/data"
import Coursescard from "../../../src/components/card/courseCard"
import Coursesdemand from "../../../src/components/card/courseDemand"
import Cardpage from "../../../src/components/home/CardPage"
import BasicCardExample from "../../../src/components/card/coursePackage";
console.log(coursesData)
function page() {
  return (
    <main className='px-4 pt-6 pb-16 md:px-10 md:pt-14 md:pb-20 lg:px-[100px] lg:pt-6 lg:pb-32  text-tbase'>
      <div className='flex flex-col gap-4 mb-10'>
        <h1 className='text-primary t  text-5xl md:text-6xl tracking-[-0.2%] capitalize text-white leading-[100%]' >Offers tailored to you</h1>
        <p className='leading-[150%] lg:text-2xl text-lg'>Select only what you need to achieve your goal. Do it yourself or find someone to help you get it done.</p>

      </div>
      <div className="mb-4 flex flex-col gap-4">
        <h5 className="lg:text-2xl md:text-lg sm:text-base text-white capitalize">filter by topic</h5>
        <div>
          <div className="w-full flex flex-wrap gap-3">
            {
              updatedTopics.map((each) => (<Button size={"medium"} variant={`${each.checked ? "primary" : "secondary"}`}>{each.name}</Button>))
            }
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-10 mb-10'>
        <hr className='h-[0.4px] w-full bg-[#44403C] border-none' />
        <h3 className='lg:text-5xl capitalize md:text-[26px] sm:text-[32px] text-bold'>our courses</h3>
        <div className='flex flex-wrap gap-3 w-full'>
          {coursesData?.map((each) => (<Coursescard course={each} />))

          }

        </div>
      </div>
      <div className='flex flex-col gap-10 mb-10'>
        <hr className='h-[0.4px] w-full bg-[#44403C] border-none' />
        <h3 className='lg:text-5xl capitalize md:text-[26px] sm:text-[32px] text-bold'>our Packages</h3>
        <div className='flex flex-wrap gap-3 w-full'>
          {[...Array(6)].map((_, i) => (<BasicCardExample key={i} />))}
        </div>
      </div>
      <div className='flex flex-col gap-10 mb-10'>
        <hr className='h-[0.4px] w-full bg-[#44403C] border-none' />
        <h3 className='lg:text-5xl capitalize md:text-[26px] sm:text-[32px] text-bold'>Coaching on demand</h3>
        <div className='flex flex-wrap gap-3 w-full'>
          {coachingData.map((each) => (<Coursesdemand course={each} />))

          }

        </div>
      </div>
      <div className='flex flex-col gap-10 mb-10'>
        <hr className='h-[0.4px] w-full bg-[#44403C] border-none' />
        <h3 className='lg:text-5xl capitalize md:text-[26px] sm:text-[32px] text-bold w-full text-center'>Haven't found what your were looking for?</h3>
        <div className='flex flex-wrap gap-3 w-full'>
          <Cardpage />
        </div>
      </div>

    </main>
  )
}

export default page