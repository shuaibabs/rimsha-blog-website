import type { BlogPost } from './types';
import { PlaceHolderImages } from './placeholder-images';

const blogImages = {
  'the-rise-of-agi': PlaceHolderImages.find(p => p.id === 'blog-2'),
  'robotics-in-manufacturing': PlaceHolderImages.find(p => p.id === 'blog-1'),
  'holographic-dreams': PlaceHolderImages.find(p => p.id === 'blog-3'),
  'quantum-computing-explained': PlaceHolderImages.find(p => p.id === 'blog-5'),
  'the-ethical-dilemmas-of-ai': PlaceHolderImages.find(p => p.id === 'blog-4'),
  'neural-networks-deep-dive': PlaceHolderImages.find(p => p.id === 'blog-6'),
}

const posts: BlogPost[] = [
  {
    id: '1',
    slug: 'the-rise-of-agi',
    title: 'The Rise of Artificial General Intelligence: Are We Ready?',
    author: "Rimsha",
    date: '2024-07-20',
    image: blogImages['the-rise-of-agi']?.imageUrl || '',
    imageHint: blogImages['the-rise-of-agi']?.imageHint || 'AI brain',
    excerpt: 'Artificial General Intelligence (AGI) is no longer a concept confined to science fiction. As we stand on the precipice of this technological marvel, we must ask ourselves: are we truly prepared for a world with machines that can think like humans?',
    content: `
      <h2>The Dawn of a New Era</h2>
      <p>Artificial General Intelligence, or AGI, represents the pinnacle of AI research—a form of artificial intelligence that possesses the ability to understand, learn, and apply its intelligence to solve any problem, much like a human being. Unlike narrow AI, which is designed for specific tasks (like playing chess or driving a car), AGI would have a broad, flexible, and adaptable intellect.</p>
      
      <p>Recent breakthroughs in large language models (LLMs) and neural network architectures have accelerated progress towards AGI. Companies like OpenAI, DeepMind, and Anthropic are in a veritable race to the top, each pushing the boundaries of what's possible. The implications are staggering, promising to revolutionize everything from scientific research and medicine to art and governance.</p>
      
      <h2>The Unprecedented Challenges</h2>
      <p>However, the path to AGI is fraught with unprecedented challenges. The "alignment problem" remains one of the most significant hurdles: how do we ensure that an AGI's goals are aligned with human values? A superintelligence that is misaligned could pose an existential risk, pursuing its objectives with a ruthless efficiency that disregards human well-being.</p>
      
      <p>Furthermore, the societal and economic disruptions could be immense. AGI could automate vast sectors of the economy, leading to widespread job displacement. It raises fundamental questions about the nature of work, purpose, and human identity in a world where intellectual labor is no longer exclusively human.</p>
      
      <h2>Preparing for the Future</h2>
      <p>As we continue to develop these powerful technologies, a global dialogue on AGI safety, ethics, and governance is not just important—it's essential. Researchers, policymakers, and the public must collaborate to create robust frameworks that guide AGI's development responsibly. The future may be uncertain, but one thing is clear: the rise of AGI will be the most significant event in human history, and our preparation for it will define the destiny of our species.</p>
    `,
    tags: ['AI', 'AGI', 'Future Tech'],
    bloggerUrl: '#',
    views: 1258
  },
  {
    id: '2',
    slug: 'robotics-in-manufacturing',
    title: 'How Robotics is Revolutionizing the Manufacturing Sector',
    author: "Rimsha",
    date: '2024-07-18',
    image: blogImages['robotics-in-manufacturing']?.imageUrl || '',
    imageHint: blogImages['robotics-in-manufacturing']?.imageHint || 'robot arm',
    excerpt: 'From nimble robotic arms to autonomous warehouse vehicles, robotics is transforming the factory floor. Explore how this revolution is boosting efficiency, precision, and safety in modern manufacturing.',
    content: `
      <h2>The Smart Factory</h2>
      <p>The manufacturing industry is undergoing its most significant transformation since the industrial revolution, and at the heart of this change is robotics. Smart factories, equipped with interconnected robots and IoT devices, are becoming the new standard. These automated systems can operate 24/7 with a level of precision and consistency that is impossible for human workers to replicate.</p>
      
      <h2>Cobots: The Collaborative Future</h2>
      <p>One of the most exciting developments is the rise of "cobots," or collaborative robots. Unlike traditional industrial robots that operate in caged-off areas, cobots are designed to work safely alongside humans. They can handle repetitive, strenuous, or dangerous tasks, freeing up their human counterparts to focus on more complex, creative, and value-added activities. This human-robot collaboration is key to enhancing productivity and creating a safer work environment.</p>

      <h2>Challenges and Opportunities</h2>
      <p>While robotics offers immense benefits, its integration also presents challenges, including high initial investment costs and the need for a skilled workforce to manage and maintain these advanced systems. However, the long-term returns in terms of productivity, quality, and competitiveness are undeniable. As technology becomes more accessible, even small and medium-sized enterprises are beginning to embrace automation, leveling the playing field and driving innovation across the sector.</p>
    `,
    tags: ['Robotics', 'Manufacturing', 'Automation'],
    bloggerUrl: '#',
    views: 980
  },
  {
    id: '3',
    slug: 'holographic-dreams',
    title: 'Holographic Interfaces: The Next Leap in Human-Computer Interaction',
    author: "Rimsha",
    date: '2024-07-15',
    image: blogImages['holographic-dreams']?.imageUrl || '',
    imageHint: blogImages['holographic-dreams']?.imageHint || 'holographic interface',
    excerpt: 'Imagine manipulating 3D data with your bare hands or attending a meeting with a lifelike holographic projection of your colleague. This sci-fi dream is closer to reality than you think.',
    content: `
      <p>For decades, we've interacted with computers through flat screens, keyboards, and mice. But a new paradigm is emerging: holographic interfaces. Powered by advancements in augmented reality (AR), spatial computing, and light-field technology, these systems project interactive, three-dimensional visuals directly into our environment. This technology promises to break down the barriers between the digital and physical worlds, creating a more intuitive and immersive user experience. From complex surgical planning and architectural design to remote collaboration and entertainment, the applications are virtually limitless. As we move beyond the screen, we are stepping into a new era of computing where information is no longer confined to a box but is an integrated part of our world.</p>
    `,
    tags: ['Future Tech', 'AR', 'UI/UX'],
    bloggerUrl: '#',
    views: 754
  },
  {
    id: '4',
    slug: 'quantum-computing-explained',
    title: 'Quantum Computing Explained: A Primer for the Future',
    author: "Rimsha",
    date: '2024-07-12',
    image: blogImages['quantum-computing-explained']?.imageUrl || '',
    imageHint: blogImages['quantum-computing-explained']?.imageHint || 'circuit board',
    excerpt: 'Quantum computers harness the bizarre principles of quantum mechanics to solve problems that are intractable for even the most powerful supercomputers. But what exactly is quantum computing, and how will it change our world?',
    content: `
      <p>Quantum computing operates on principles like superposition and entanglement. Unlike classical bits, which are either a 0 or a 1, a quantum bit, or "qubit," can be a 0, a 1, or both at the same time. This allows quantum computers to perform a massive number of calculations simultaneously. While still in its infancy, this technology holds the potential to revolutionize fields like materials science, drug discovery, and cryptography. It could lead to the creation of new materials with incredible properties, the development of life-saving drugs in record time, and also pose a threat to our current encryption standards. The quantum future is complex, but its potential is awe-inspiring.</p>
    `,
    tags: ['Quantum Computing', 'Future Tech', 'Science'],
    bloggerUrl: '#',
    views: 1532
  },
  {
    id: '5',
    slug: 'the-ethical-dilemmas-of-ai',
    title: 'Navigating the Ethical Dilemmas of Artificial Intelligence',
    author: "Rimsha",
    date: '2024-07-10',
    image: blogImages['the-ethical-dilemmas-of-ai']?.imageUrl || '',
    imageHint: blogImages['the-ethical-dilemmas-of-ai']?.imageHint || 'future city',
    excerpt: 'As AI becomes more powerful and autonomous, the ethical questions surrounding it become more urgent. From algorithmic bias to autonomous weapons, we must navigate a complex moral landscape.',
    content: `
      <p>The development of AI is not just a technical challenge; it's an ethical one. How do we prevent biases in training data from being amplified by AI systems, leading to discriminatory outcomes in areas like hiring and criminal justice? What moral frameworks should guide the decisions of autonomous vehicles in accident scenarios? And what are the implications of developing autonomous weapons that can make life-or-death decisions without human intervention? These are not easy questions, and they require a multidisciplinary approach involving technologists, ethicists, sociologists, and policymakers. Building a future with AI that is not only intelligent but also wise and just is one of the greatest challenges of our time.</p>
    `,
    tags: ['AI', 'Ethics', 'Society'],
    bloggerUrl: '#',
    views: 899
  },
  {
    id: '6',
    slug: 'neural-networks-deep-dive',
    title: 'A Deep Dive into Neural Networks',
    author: "Rimsha",
    date: '2024-07-08',
    image: blogImages['neural-networks-deep-dive']?.imageUrl || '',
    imageHint: blogImages['neural-networks-deep-dive']?.imageHint || 'data stream',
    excerpt: 'Inspired by the human brain, neural networks are the powerhouse behind the current AI revolution. This article breaks down how they work, from simple perceptrons to complex deep learning models.',
    content: `
      <p>At their core, neural networks are composed of interconnected layers of "neurons" or nodes. Each connection has a weight that is adjusted during the training process. When you feed data into the input layer, it passes through one or more "hidden" layers, where the neurons perform calculations and pass their results on. Finally, the output layer provides the result, whether it's identifying a cat in a photo or translating a sentence. The "deep" in deep learning refers to networks with many hidden layers, allowing them to learn incredibly complex patterns and hierarchies from vast amounts of data. Understanding this fundamental architecture is the first step to grasping the magic of modern AI.</p>
    `,
    tags: ['AI', 'Deep Learning', 'Neural Networks'],
    bloggerUrl: '#',
    views: 2104
  }
];

export function getAllPosts(): BlogPost[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getFeaturedPosts(count: number): BlogPost[] {
  return posts.sort((a, b) => b.views - a.views).slice(0, count);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find(post => post.slug === slug);
}
