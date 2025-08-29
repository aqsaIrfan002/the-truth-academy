export const casesData = [
  {
    id: 1,
    title: "Is Pop Star Aria Missing? Sources Say No One Has Seen Her in Weeks.",
    image: "images/TTACase-1.png",
    content: "Concerns are growing among fans of pop star Aria after her social media went silent and her team canceled several public appearances. An anonymous source close to her team says she hasn't been seen at her usual recording studio in two weeks. Fans on social media are using the hashtag #FindAria and speculating about her whereabouts.",
    detectiveTools: {
      source: "This article is from \"The Celebrity Tea,\" a blog. Their motto is \"Spilling the secrets, one rumor at a time.\" They cover a lot of celebrity gossip.",
      image: "Image analysis shows the photo is a real photo of Aria, but a closer look at the photographer's website shows the photo's EXIF data lists the date it was taken as two years ago.",
      bias: "The headline is a question, not a statement. The article's main \"evidence\" is an anonymous source and fan speculation on social media.",
      ai: "No AI-generated text or images were found in the article. This appears to be a human-written story."
    },
    correctAnswer: "False",
    explanation: "Sounds convincing, but nope. This news is False. The detective tools revealed that the primary \"evidence\" for Aria being missing—the photo—was old and from a past concert tour. A reliable news source would use a current photo or note that the image is a file photo. Additionally, the entire story is built on the weak foundations of an anonymous source and fan speculation. This is a classic example of fabricated news. The article takes a few real details (Aria's cancelled appearances and silent social media) and then uses old information and unverified rumors to create a compelling but untrue story. Were u able to look past the gossip and use the facts to solve the case?"
  },
  {
    id: 2,
    title: "Officer Fatally Shoots Armed Suspect During Drug Raid.",
    image: "./images/TTACase-2.png",
    content: "A 28-year-old man was killed this morning during a narcotics raid at an apartment complex. According to Police Chief Santos, officers encountered an armed individual who posed an \"immediate threat.\" A handgun was recovered at the scene.",
    detectiveTools: {
      source: "The article is from the Metro Daily Herald, a long-standing local newspaper. They're a credible source, but their crime reporting often aligns closely with police department press releases.",
      image: "The photo, taken by a staff photographer at 7:45 AM, shows the scene two hours after the incident. The photo is authentic but only shows the outside of the building.",
      bias: "The article uses words like \"armed suspect\" and \"posed an immediate threat\" to describe the deceased, which are direct quotes from the police chief. No other sources, such as neighbors or family, are quoted.",
      ai: "A scan shows no signs of AI. The writing style is typical of human-written journalism, and the details are specific, suggesting a real event."
    },
    correctAnswer: "Misleading",
    explanation: "Close… but the details are bent out of shape, the news is misleading. It tells a true story but presents it with a significant bias. The facts are correct—a shooting happened, and a person was killed—but the article's reliance on only the police chief's account makes it incomplete. The use of phrases like \"armed suspect\" and \"posed an immediate threat\" directly from the police gives a specific, one-sided perspective that the reader is led to believe is the whole truth. A more balanced report would have included perspectives from neighbors, family members, or other witnesses, but this article omits them. Now u know how a real news event can be framed to be highly deceptive."
  },
  {
    id: 3,
    title: "GDP Growth Hits 4.2% as Economic Recovery Accelerates.",
    image: "./images/TTACase-3.png",
    content: "The U.S. economy expanded at an annualized rate of 4.2% in the third quarter, exceeding economists' expectations and marking the strongest growth in two years, the Commerce Department reported today. The robust performance was driven by increased consumer spending and business investment.",
    detectiveTools: {
      source: "The article is from the Financial Times, a major, highly respected financial newspaper. It's known for its accurate business and economic news.",
      image: "The image is a professional graph showing economic growth data. The graph's style matches the FT's graphics team, and the data it presents aligns with the official Commerce Department release.",
      bias: "The article uses positive, celebratory language like \"robust performance\" and \"economic momentum.\" It quotes Treasury Secretary Janet Yellen, who confirms the good news, but doesn't include any counterarguments from economists or critics.",
      ai: "A scan shows no signs of AI. The writing style and use of specific economic terms are consistent with a real financial journalist. The quote from the Treasury Secretary matches her recent public statements."
    },
    correctAnswer: "True",
    explanation: "Surprisingly, it checks out! This news is true. The article presents verifiable facts from a credible source, the Financial Times, and cites official government data that can be independently checked. The use of positive language like \"robust performance\" and \"economic momentum\" is not an attempt to deceive but rather an accurate reflection of genuinely good economic news. In journalism, especially financial reporting, it's common to use celebratory language when reporting on positive trends. While the language has a pro-business slant, it doesn't cross the line into misinformation."
  },
  {
    id: 4,
    title: "Protestors Demand Government Resignations.",
    image: "./images/TTACase-4.png",
    content: "A large group of protestors gathered today in front of City Hall, calling for the immediate resignation of several high-ranking government officials. The protest was organized by the \"Citizens for Accountability\" group, which accused the officials of financial mismanagement. The police were on the scene, maintaining order.",
    detectiveTools: {
      source: "The article is from \"The Daily Herald,\" a well-known local newspaper with a reputation for balanced reporting and investigative journalism.",
      image: "The photo shows a large group, but the people are spaced far apart. A reverse image search reveals that many of the people wearing black hats are part of a local gardening club that was holding a separate event nearby.",
      bias: "While the body of the article is factual, the headline uses the word \"demand\" to imply a larger, more aggressive protest. The article also includes people from an unrelated event to make the protest look bigger than it actually was.",
      ai: "A scan for AI content returns a low confidence score, suggesting the article was written by a human."
    },
    correctAnswer: "Misleading",
    explanation: "Tricky one! It's not totally wrong, but not right either. This news is misleading. While a protest did occur, and the article's core facts are true, the reporting is deceptive. The headline uses strong, declarative language (\"demand\") to exaggerate the protest's intensity. More importantly, the photograph includes people from a completely unrelated event—the gardening club—to create a false impression of the protest's size. This is a subtle but effective form of visual deception that alters the reader's perception of the event without telling a direct lie. Remember: it's not just about the facts, it's about how they're presented."
  },
  {
    id: 5,
    title: "Stadium Roof Collapses During Renovation, Injuring Dozens.",
    image: "./images/TTACase-5.png",
    content: "According to City Chronicle, a section of the Eastside Arena's roof collapsed during ongoing renovations, injuring 20 construction workers. An anonymous worker told reporters that the company \"cut corners on safety.\"",
    detectiveTools: {
      source: "The City Chronicle is a small local paper, generally reliable, but often publishes breaking news before full confirmation. City officials issued a statement the same day confirming minor debris fell at the stadium.",
      image: "Reverse search shows the photo is indeed Eastside Arena — but the photo was taken last year when a storm damaged the stadium.",
      bias: "The story leans heavily on one anonymous worker claiming \"corners were cut\" but does not include company or official safety inspector statements.",
      ai: "The article seems human-written using natural style. Detecting no signs of AI."
    },
    correctAnswer: "False",
    explanation: "Hold up, don't be fooled! This news is actually false. The City Chronicle rushed to publish before full confirmation, and the photo they used is from last year's storm damage, not from any recent renovation work. Also, in this case, no official confirmation of a collapse or injuries was provided, just minor debris. The article also relies only on an unnamed worker's claim while giving no statements from officials or safety inspectors. While the story feels urgent, it is built on old images and unverified voices, not facts. A true collapse with injuries would have been confirmed quickly and supported by reliable sources. Sometimes stories are made to sound urgent, but without verified facts, they fall apart."
  },
  {
    id: 6,
    title: "Over 5,000 Jobs Cut as Tech Giant Moves Operations Overseas.",
    image: "./images/TTACase-6.png",
    content: "According to a report from Business Insider Weekly, tech company \"NovaSystems\" announced it will move manufacturing to another country, cutting 5,000 jobs in the U.S. The article cites an \"internal memo\" leaked by an employee. Employees are said to feel \"betrayed\" and fear entire offices may close.",
    detectiveTools: {
      source: "Business Insider Weekly is a mid-sized online financial news outlet. They have reported accurately in the past but have also walked back stories when relying on leaks. Hours later, NovaSystems' official press release confirmed some restructuring.",
      image: "The article shows a night photo of NovaSystems' HQ looking slightly unnatural on closer inspection, the sky and lighting don't match normal conditions, suggesting edits were made. Reverse search shows it's actually from their own public gallery, taken months ago, in daylight.",
      bias: "Strong emphasis on \"massive job losses\" and \"betrayal\" without citing official statements from NovaSystems.",
      ai: "The article appears consistent with human writing. However, detection shows both the altered image and parts of the leaked memo text were generated with AI tools."
    },
    correctAnswer: "False",
    explanation: "Don't buy into the hype, fake news alert! The news is false. Your detective tools revealed that while the source (Business Insider Weekly) has some credibility, it also has a track record of rushing stories on \"leaked memos\" without full confirmation. The image used wasn't new at all — it came directly from NovaSystems' own press gallery and gave no evidence of a sudden overnight decision. On top of that, the language in the article exaggerated the scale of the layoffs, with dramatic words like \"betrayal\" and \"massive job losses,\" yet it didn't include any official statements from the company. NovaSystems did announce restructuring in some parts with no losses. Always watch out, sometimes the biggest danger is not the facts themselves, but how dramatically they're presented."
  },
  {
    id: 7,
    title: "Many Students Hospitalized After Eating Spoiled Lunch at Local School.",
    image: "./images/TTACase-7.png",
    content: "A viral post claims that a large group of students at Westbrook Middle School were rushed to the hospital after being served spoiled chicken nuggets. The story is from Neighborhood Watch News, citing \"concerned parents\" and unnamed eyewitnesses.",
    detectiveTools: {
      source: "Neighborhood Watch News is a volunteer-run community blog that often reposts social media rumors without independent verification.",
      image: "The photo is not from the school. Reverse search shows it was uploaded to Reddit in 2019 by someone in another state.",
      bias: "Heavy emotional language \"rushed,\" \"spoiled,\" \"unsafe for kids\". The local hospital confirmed 2 students came in with food poisoning and were hospitalized.",
      ai: "No signs of AI text, but the article mirrors viral social media phrasing."
    },
    correctAnswer: "Misleading",
    explanation: "Deceptive framing strikes again! This story is misleading. Something did happen — two students did feel sick and went to the hospital. But the article grossly exaggerated the scale, claiming \"a large number of students hospitalized\" and \"spoiled food disaster\" when in reality it was just two cases, unrelated to mass food poisoning. This kind of reporting twists a small incident into a sensational \"scandal,\" making the situation sound far worse than it truly was. The facts (a couple of students fell ill) were real, but the framing and numbers were misleading. Don't just accept numbers at face value, always dig into how they're framed."
  },
  {
    id: 8,
    title: "Local Teen Rescues Child From Flooded River — A Hero is Born!",
    image: "./images/TTACase-8.png",
    content: "The Springfield Gazette reports that 16-year-old Maya Lopez dove into the raging East Fork River after spotting a small child being swept away by floodwaters. Witnesses described the moment as \"like something from a movie,\" with Maya clinging to the child in the powerful current until firefighters reached them. Some onlookers are already calling her the town's \"young hero.\"",
    detectiveTools: {
      source: "The Springfield Gazette is the town's established daily newspaper, with a reputation for reliable local reporting although it has been accused of exaggerating local stories.",
      image: "Reverse search confirms the rescue photo is original, officially credited to the Springfield Fire Department's verified Twitter account.",
      bias: "While the wording is emotional (\"a hero is born,\" \"like something from a movie\"), it still includes quotes from the fire chief, eyewitnesses, and Maya's parents.",
      ai: "The article appears AI-generated with human edits, headline polish and cinematic phrasing feel machine-like. However, the direct quotes are not AI."
    },
    correctAnswer: "True",
    explanation: "Heroic! Isnt it?! This incident is true! Although the headline and wording sound dramatic (almost too dramatic), this story is true. Every element checks out: a respected local newspaper reported it, the image is authentic and from official sources, and multiple independent confirmations like fire department + TV interview + family etc support the event. The exaggeration is only in tone, not in facts — showing that sometimes incredible, heroic stories really are accurate. Don't dismiss drama too fast, it might be real."
  },
  {
    id: 9,
    title: "Fans Fear Influencer Luna Vega Was Kidnapped During Livestream.",
    image: "./images/TTACase-9.png",
    content: "During a late-night livestream, popular influencer Luna Vega suddenly went silent before the video cut off. Her followers claim they heard a man's voice say, \"We have her.\" Panic spread across TikTok, with the hashtag #SaveLuna trending worldwide. Some fans claim she looked distressed in her last post earlier that day.",
    detectiveTools: {
      source: "The story appears on BuzzClick, a viral news site known for recycling fan rumors without direct verification.",
      image: "The thumbnail of Luna crying is real, but it was taken from an older livestream where she spoke about harassment, not from the night in question.",
      bias: "The article dramatizes the event by repeating only fan fears and speculation while ignoring official statements.",
      ai: "The article itself seems human-written gossip journalism rather than AI-generated but tracing the viral posts shows some came from AI-generated accounts and content, amplifying the kidnapping narrative."
    },
    correctAnswer: "Misleading",
    explanation: "Sneaky spin! This article is actually misleading. The article makes it sound like Luna was kidnapped, but there's no evidence. The livestream interruption actually happened, and fans genuinely expressed concern online, but the claim of a kidnapping is only speculation with no evidence to support it. The article heightens the panic by using an old crying image out of context and relying on fan theories instead of verified information. Since the report twists real events to suggest a false conclusion, it is deceptive but not entirely fabricated, making it misleading. Real facts can be framed to mislead, always double-check."
  },
  {
    id: 10,
    title: "Hollywood Star Dante Cruz Arrested for Money Laundering Ties.",
    image: "./images/TTACase-10.png",
    content: "A shocking twist has emerged as Hollywood A-lister Dante Cruz was allegedly arrested last night at a Miami nightclub. Multiple Twitter users posted blurry photos showing Cruz in handcuffs, surrounded by police. Sources claim the arrest is linked to an ongoing FBI probe into money laundering operations involving celebrity-owned nightclubs.",
    detectiveTools: {
      source: "The article comes from Daily Exposé, a scandal site known for exaggeration, but on rare occasions it breaks stories that later match official police reports.",
      image: "Reverse search shows the photo appeared on Reddit in 2018 tied to a bar fight, but the person's tattoo and build closely match Cruz, suggesting the photo is authentic to him.",
      bias: "The piece uses sensational words like \"shocking twist\" and \"allegedly arrested,\" and leans heavily on Twitter chatter, though it quietly matches the details in Miami's public arrest log.",
      ai: "Some phrasing (\"shocking twist,\" \"allegedly arrested\") resembles AI-generated clickbait style, but overall the uneven flow and gossip-magazine tone point to a human author rushing to push out the story."
    },
    correctAnswer: "True",
    explanation: "No way! This one's real. This news is true! Despite the unreliable reputation of the source, the recycled image, and the article's sensational tone, the story proves accurate. The photo details line up with Cruz even if the photo is old, and most importantly, the Miami arrest record confirms he was detained on money laundering charges according to the details mentioned in the records. The dramatic writing resembling AI style makes it feel questionable, but when cross-checked with public records, the arrest itself is real. AI style can add doubt, but facts need checking against solid sources."
  },
  {
    id: 11,
    title: "Tech Billionaire Secretly Buys Majority of National Newspaper.",
    image: "./images/TTACase-11.png",
    content: "In a shocking twist, leaked financial documents suggest billionaire CEO Victor Han has acquired a controlling stake in The National Chronicle, the country's largest newspaper. Critics warn this could give him massive influence over politics and public opinion. Neither Han nor the newspaper has issued a statement yet.",
    detectiveTools: {
      source: "Published by Financial Wire Online, a niche finance blog. While often speculative, it occasionally catches real scoops by digging into regulatory filings.",
      image: "The stock market graph photo is generic, recycled across many finance stories.",
      bias: "Uses dramatic phrasing like \"shocking twist\" and \"massive influence,\" which leans into fear without balance.",
      ai: "Some repetitive phrasing suggests light AI drafting/editing, though filings appear to have been cited directly."
    },
    correctAnswer: "True",
    explanation: "A little confusing? Well, this article is true. Even with the flashy language and generic stock image, the key detail is that the blog drew from actual regulatory filings mentioned in the check AI tool. Later, these filings were confirmed to show Victor Han had indeed acquired a controlling share of The National Chronicle. The writing style and AI touch-ups may feel untrustworthy, but the documents back it up, making the story true. Shows why we must check evidence, not just tone."
  },
  {
    id: 12,
    title: "Scientists Say Smaller Ozone Hole Means UV Risk Is Over.",
    image: "./images/TTACase-12.png",
    content: "A climate blog reports that since satellite images show the Antarctic ozone hole was slightly smaller this year compared to last, experts believe harmful UV rays are no longer a danger. The article suggests that sunscreen use could even become \"less essential\" in the future.",
    detectiveTools: {
      source: "Published by SkyHealth Weekly, a lifestyle blog that occasionally cites real scientific reports but often simplifies them. No direct NASA or WHO confirmation in this piece.",
      image: "The blue-sky photo is a generic stock picture with no satellite data or science visuals.",
      bias: "Uses overly reassuring wording like \"risk is over\" and \"sunscreen less essential,\" ignoring decades of health guidance. But yes, some satellite reports this year did show a smaller ozone hole than in 2022.",
      ai: "Slight repetition of phrases like \"risk is over\" and \"danger is gone\" hints at automated writing."
    },
    correctAnswer: "False",
    explanation: "Did u get it? This news is false. The claim that the UV danger is \"over\" is false. While it's true the ozone hole was slightly smaller this year, that happens regularly and doesn't mean the problem is solved. The blog exaggerated a minor improvement into a false conclusion. There is no confirmation or any statement from experts like NASA and WHO. Sunscreen and UV precautions are still essential. The article takes a small true detail (slightly smaller hole this year) and twists it into a completely false conclusion. A small fact can be stretched into a false story, see before you believe."
  }
];
