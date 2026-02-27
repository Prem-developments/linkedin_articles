export type Article = {
  id: string;
  title: string;
  summary: string;
  content: string;
  source: string;
  created_at: string;
};

export const mockArticles: Article[] = [
  {
    id: '1',
    title: 'How to Build a High-Converting Landing Page in 2026',
    summary:
      'A practical breakdown of modern landing page best practices, from above-the-fold messaging to trust signals and conversion optimization.',
    content:
      'High-converting landing pages start with a single, clear promise. Instead of trying to do everything at once, focus the hero section on one outcome the visitor cares deeply about.\n\n' +
      'Use language your audience already uses in their own conversations and search queries. Mirror their words back to them in headlines and subcopy so the page feels instantly relevant.\n\n' +
      'Social proof, such as testimonials, logos and lightweight case studies, should be integrated where objections naturally appear. When you ask for an email address or payment, pair that moment with a reassurance that others have succeeded by taking the same step.\n\n' +
      'Finally, ship fast and iterate. The best landing pages are rarely perfect on the first attempt, but they become extremely effective when informed by real user behavior and ongoing experimentation.',
    source: 'Growth Weekly',
    created_at: '2026-01-15T09:30:00.000Z',
  },
  {
    id: '2',
    title: 'The New Content Repurposing Playbook for Busy Teams',
    summary:
      'Turn one source article into a month of social posts, email content and visual assets without burning out your creative team.',
    content:
      'Most teams dramatically underestimate how far a single strong article can go. Instead of publishing once and moving on, treat each article as a content asset that can be remixed into multiple formats.\n\n' +
      'Start by identifying the three to five strongest ideas in the piece. Each of these can anchor its own short-form video, carousel, or email segment. You are not repeating yourself—you are meeting different audiences on the channels they prefer.\n\n' +
      'Create simple templates for images, GIFs and carousels so that repurposing becomes a low-friction process. With templates in place, your workflow shifts from design-heavy to decision-heavy, which is where human judgment is most valuable.\n\n' +
      'Track which repurposed formats perform best for each topic, and feed that data back into your planning. Over time, you will know exactly which ideas deserve deeper treatment and which can stay lightweight.',
    source: 'Content Ops Journal',
    created_at: '2026-01-22T14:10:00.000Z',
  },
  {
    id: '3',
    title: 'Design Systems for Non-Designers: A Practical Guide',
    summary:
      'How marketing and content teams can use design systems to stay on-brand without waiting on a dedicated designer for every asset.',
    content:
      'Design systems are no longer just for product teams. For marketing and content teams, they provide a shared visual language that keeps everything on-brand, even when multiple people are creating assets.\n\n' +
      'Start by defining just a few key elements: colors, typography, spacing and common components such as buttons and cards. These do not need to be perfect; they only need to be consistent.\n\n' +
      'Provide clear examples of what “good” looks like. A small library of on-brand images, carousels and thumbnails can dramatically speed up content production while reducing review cycles.\n\n' +
      'When everyone can quickly assemble assets from the same building blocks, you free designers to focus on higher-leverage work like campaigns and brand evolution instead of endless one-off requests.',
    source: 'Interface Notes',
    created_at: '2025-12-05T11:00:00.000Z',
  },
  {
    id: '4',
    title: 'Story-First Analytics: Measuring What Actually Matters',
    summary:
      'Move beyond vanity metrics by tracking how your content moves people along a clear narrative, from first touch to meaningful action.',
    content:
      'Most dashboards are crowded with numbers that rarely change decisions. Story-first analytics ask a simpler question: what is the journey we want people to take, and where are they dropping off?\n\n' +
      'Map your ideal narrative in plain language first. For example: discover the brand, understand the problem, see a credible solution, and feel confident enough to try it. Only then should you decide which events or metrics to attach to each step.\n\n' +
      'By measuring the journey instead of isolated clicks, you start to see which pieces of content are quietly doing the most work. Often, an unglamorous FAQ or comparison guide turns out to be the unsung hero of the funnel.\n\n' +
      'This perspective also makes experimentation easier. You can test whether new articles, videos or carousels meaningfully improve a specific chapter of the story rather than chasing lifts in a single metric.',
    source: 'Analytics Lab',
    created_at: '2026-02-01T16:45:00.000Z',
  },
  {
    id: '5',
    title: 'From Article to Carousel: Visual Storytelling Techniques',
    summary:
      'Techniques for translating long-form articles into scroll-stopping carousels that highlight the sharpest ideas in a visual way.',
    content:
      'Carousels work best when each frame earns the swipe. Instead of cramming mini-paragraphs into slides, focus on one point per frame with bold, high-contrast typography.\n\n' +
      'Your first slide should promise a transformation or answer a specific question. Subsequent slides then unpack that promise step by step, using simple visuals to anchor each idea.\n\n' +
      'Repurposing an article into a carousel is not about summarizing every detail. It is about choosing the most surprising or useful insights and giving each one room to breathe.\n\n' +
      'End with a clear call to action that connects back to the original article or a related resource, so interested viewers know exactly where to go next.',
    source: 'Visual Content Studio',
    created_at: '2026-02-10T10:20:00.000Z',
  },
  {
    id: '6',
    title: 'AI-Assisted Content Workflows Without Losing Your Voice',
    summary:
      'A framework for using AI tools to speed up content production while keeping a clear, recognizable brand voice.',
    content:
      'AI is at its best when it works as an assistant, not an author. Instead of asking it to “write an article,” use it to generate outlines, alternate headlines or variations of examples.\n\n' +
      'Create a simple voice guide that includes preferred phrases, banned words and a few before/after examples of on-voice vs off-voice copy. Use this as a prompt whenever you involve AI in the process.\n\n' +
      'Review AI-assisted drafts with the same rigor you would apply to a human writer. Look for factual accuracy, emotional tone and brand alignment, not just grammar.\n\n' +
      'Over time, your goal is to move repetitive work—like formatting, summarizing and repurposing—into AI-assisted lanes so your team can stay focused on strategy and storytelling.',
    source: 'Workflow Weekly',
    created_at: '2026-02-18T13:05:00.000Z',
  },
];

export const getArticleById = (id: string): Article | undefined =>
  mockArticles.find((article) => article.id === id);

