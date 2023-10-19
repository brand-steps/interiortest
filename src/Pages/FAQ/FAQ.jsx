import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Accordion } from 'flowbite-react';
import Footer from "../../Components/Navbar/Home/Foooter/Footer";

function FAQ() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '8px',
    width: '1100px', // Adjust the width as needed
    height: '600px'
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };

  return     <>
  <Navbar/>
  <h1 className='heads mx-9'>FAQs</h1>

  <Accordion className="my-4 mx-7">
      <Accordion.Panel>
        <Accordion.Title>
        How to start?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            <p>
            Before you decide to accept an competition, we want to make sure that you know what you are up against.
<br/> <br/>
After you sign up, you can either start an competition right away or, as we usually recommend, start with our Free Trial, which is a free version of our competition intended for practicing purposes. In the Free Trial, you will also have the possibility to test some of our Trading Applications and you will also receive a shortened analysis version of your performance in the Free Trial. You can retake your Free Trial as many times as you want to make sure you are fully prepared for an competition.
<br/> <br/>
Once you are ready to accept an competition, you can configure your account here or from the Client Area.
            </p>

          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
        What is My Forex Competition??
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            <p>
            My forex competition is a whole new way of trading that's designed to give traders like you a chance
             to shine. With a minimal registration fee and complete transparency, you can forget about prop
              firms and embrace this fresh approach. <br/><br/>
               We've simplified the rules to just one that is most
               profitable trader win the first winner will get a minimum win of 1:4 and apart from this 30% 
               traders who are at the highest ranking will also win. And the best part? You can win in a day
                and withdraw your earnings in hours. It's all about making trading easier and more rewarding 
                for you. Ready to dive in? Let's get started!
            </p>
          </p>
         
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
        Is My Forex Competition trustworthy?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            <p>
            My forex competition is all about creating a trusted and reliable trading platform for aspiring
             traders like yourself. With a focus on transparency, we strive to provide you with a clear
              understanding of our operations and pricing. Our consistent track record of delivering on
               promises and prioritizing customer satisfaction sets us apart. We offer high-quality services
                backed by our expertise and dedication to helping you succeed in the forex market. Communication
                 is key, and we're here to address any questions or concerns you may have. Trust is at the core 
                 of our business, and we're committed to earning and maintaining it every step of the way. 
                 Welcome to the world of My forex Competition and Trade with us without any doubt.
            </p>
          </p>

        </Accordion.Content>
      </Accordion.Panel>
      
      <Accordion.Panel>
        <Accordion.Title>
        Who can join My Forex Competition?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            <p>
            My forex Competition stands out in the crowd for several reasons. First off, we believe in keeping fees minimal to ensure that our clients can maximize their profits. Transparency is our middle name - we're all about being open and honest about our operations, fees, and performance. 
<br/><br/>
But here's where it gets really exciting! We have a live leaderboard that showcases the performance of our traders in real-time. It adds a competitive edge and allows you to see how you stack up against others. And guess what? We don't burden you with complicated rules like maximizing drawdown or imposing daily drawdown limits. We want to give you the freedom to trade without unnecessary restrictions.
<br/><br/>
Now, let's talk about winning percentage. We understand that it's not always about the number of wins, but the quality of trades. Our focus is on helping you make smart and strategic trades, even if it means a winning percentage of 30%. Quality over quantity, right?
<br/><br/>
And when it comes to withdrawals, we're lightning fast! We aim to process withdrawals within hours, so you can access your funds when you need them. No waiting around for days or weeks.
<br/><br/>
So, why should you opt for us? Well, we offer minimal fees, transparency, a live leaderboard, no complicated rules, a focus on quality trades, and speedy withdrawals. We're all about providing a seamless and rewarding trading experience. Give us a shot and see the difference for yourself! 
            <br/>
            </p>
          </p>

        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel>
        <Accordion.Title>
        Why should I join My Forex Competition?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            <p>
            Having experience with trading ourselves, we understand that to be a great trader, you need more than just enough capital to trade with. It is in our interest to provide our clients with conditions under which they can perform at their best. Our clients will receive wide access to our innovative Trading Applications which can enhance their trading edge and they will also receive detailed feedback from our company. Traders may also periodically consult with our Performance Coach free of charge. 
<br/> <br/> 
Then there is the trading discipline that we emphasize. You cannot be all loosey-goosey with the Account. We will carefully observe your trading results and provide you with an assessment in the form of the Account Analysis and Trader’s Analysis. Our rules are designed to teach you professional risk management habits and ultimately make you a better trader. No more over-trading, revenge trading, over-leveraging, etc.
            <br/>
            </p>
          </p>

        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
        What account size will I work with?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            <p>
           Traders will have the same account balance size as chosen for their preceding Competition and Verification.
To avoid any confusion, after a client becomes an Trader, he/she will be provided with a demo account with fictitious capital. Clients are entitled to up to 90% of results generated on the Account. 
<br/> <br/> 
We do not have upgrading options so you need to choose the appropriate account size right at the beginning when you are configuring your Challenge. You can, however, start a new Challenge and upon successfully passing another Evaluation Process, we will provide you with another Account. Just keep in mind that our maximum capital allocation on FTMO Accounts is $400,000 per trader/strategy.
            <br/>
            </p>
          </p>

        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
        How does an My Forex Competition Account work from the technical side?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            <p>
            An Account is an account with fully fictitious funds, however, with real market quotes from liquidity providers. Please note that, for Account purposes, liquidity providers do not provide us or Traders with any real money (liquidity), only with the market quotes. Our clients therefore never actually perform any trades on live markets. 
            <br/><br/>
            In a separate process,we also trades on its own account (outside of the platform) with real financial means. While performing its own trades, we may also use trading data obtained from its clients’s Accounts. We continuously monitors and analyses the trades executed by  Traders in the demo environment and subsequently evaluates whether trades will be executed for FTMO’s own account. 
            </p>
          </p>

        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
    <Footer/>
  </>
}

export default FAQ;
