import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';

const blogPosts = {
  'top-landscape-companies-kenya': {
  title: '🏆 Top 10 Landscape Companies in Kenya: Who’s Leading the Green Revolution?',
  date: '2025-07-22',
  content: [
    "Kenya’s landscaping sector has grown immensely, with top firms shaping everything from urban gardens to large institutional spaces. At the forefront are companies combining sustainability, creativity, and technical skill.",

    "Here’s a ranked list of 10 outstanding landscape companies in Kenya, known for their professionalism, experience, and innovative green solutions.",

    "1. YouLandscape Architects & Consultants (Nairobi)",
    "A leader in sustainable landscape architecture and outdoor design, YouLandscape blends functionality with elegance. With over 10 years of experience, the firm offers everything from master planning and irrigation to maintenance and water features—serving homes, institutions, and resorts across Kenya. Their focus on native planting and climate-adapted designs makes them a favorite among discerning clients.",

    "2. Aquascapes (Nairobi)",
    "Specialists in water-wise landscaping, Aquascapes offers advanced irrigation, water features, and eco-conscious hardscaping. Their projects balance efficiency with natural aesthetics, making them ideal for modern, sustainable gardens and commercial installations. They are highly rated for smart systems and clean designs ([aquascapes.garden](https://www.aquascapes.garden/?utm_source=chatgpt.com)).",

    "3. Ascentric Design Group (Nairobi)",
    "With a portfolio that includes large-scale projects for campuses, civic centers, and estates, Ascentric is known for bold yet sustainable designs. They use native species, smart layouts, and context-sensitive planning to enhance function and biodiversity ([ascentricdesign.co.ke](https://www.ascentricdesign.co.ke)).",

    "4. The Landscape Studio (Nairobi & Barcelona)",
    "Operating in Kenya and Spain, they’re renowned for boutique, high-design gardens and hospitality spaces. Their minimal ecological footprint and artistic approach to outdoor spaces have won several awards and accolades.",

    "5. Unique Landscapes Kenya Limited (Nairobi)",
    "Offering a mix of landscape installation, irrigation, and maintenance, Unique Landscapes is known for affordability and custom solutions. Their attention to client needs has made them popular in residential and commercial settings ([uniquelandscapes.co.ke](https://uniquelandscapes.co.ke)).",

    "6. Lariak Landscapes Ltd (Nairobi)",
    "Lariak’s expertise spans landscape design, ecological planning, and restoration. They stand out for their scientific and data-informed approach to projects, integrating green infrastructure into modern spaces ([victormatara.com](https://victormatara.com/list-of-best-landscaping-companies-in-kenya)).",

    "7. Grafa Landscaping & Designers (Nairobi)",
    "Grafa offers end-to-end services including pathways, lawns, water systems, and lighting. They’re recognized for efficiently executing complex landscaping projects for sports facilities, estates, and hotels ([grafalandscaping.com](https://grafalandscaping.com)).",

    "8. Bliss Flora Limited (Kiambu)",
    "Bliss Flora combines ornamental plant propagation and landscape design. They’re also a supplier of high-quality plant materials for landscapers across the country.",

    "9. Elgon Kenya Landscaping Division (Nairobi)",
    "Part of Elgon Kenya’s broader agri-business, their landscaping unit brings technical knowledge and plant expertise to large property beautification and maintenance contracts.",

    "10. UrbanScape Africa (Nairobi)",
    "A boutique firm gaining recognition for edgy, urban landscape installations in residential and hospitality projects. They focus on native plants, vertical gardens, and functional minimalism.",

    "🌿 Whether you’re designing a high-end estate or a small kitchen garden, these companies represent the best of Kenya’s landscaping scene. Their combined experience and innovation continue to elevate outdoor spaces across the country.",

    "Thinking of transforming your own landscape? Start with Kenya’s top-ranked experts — YouLandscape Architects & Consultants. Reach out today for a tailored consultation and professional project execution."
  ],
},
  'transform-your-small-backyard': {
    title: '🌿 Transform Your Small Backyard: Clever Landscape Design Ideas for Urban Spaces',
    date: 'May 27, 2025',
    content: [
      "A small backyard doesn’t have to mean small ideas. In fact, limited space can inspire some of the most creative and functional outdoor transformations. Whether you’re dreaming of a serene retreat, a vibrant garden, or a stylish entertainment zone, your backyard has untapped potential waiting to be unlocked.",
      
      "In this post, we’ll guide you through practical and inspiring tips to turn your compact backyard into a space you’ll love all year round.",
    
      "1. Start with a Vision",
      "Before picking up a shovel or planting the first flower, take time to visualize how you want to use your space. Ask yourself: Do you want a cozy seating area? Will you entertain guests? Are you looking to grow vegetables or herbs? Do you need space for kids or pets? Defining your priorities helps you make the most of your available square footage and ensures every element has a purpose.",
    
      "2. Use Vertical Space",
      "When floor space is limited, think up! Vertical gardening is a game changer in small backyards. Install wall planters or vertical trellises for climbing plants. Use hanging pots from pergolas or beams. Create a green wall using modular planter panels. This not only adds lush greenery but also draws the eye upward, creating a sense of height and openness.",
    
      "3. Incorporate Multipurpose Furniture",
      "Choose furniture that doubles up on function. Storage benches provide seating and space for garden tools. Foldable tables can be tucked away when not in use. Use built-in seating like retaining walls with cushions to save space. Opt for lightweight or modular pieces that can be rearranged easily depending on your needs.",
    
      "4. Add Lighting for Ambience",
      "Evenings in your small backyard can be magical with the right lighting. String lights or fairy lights add a warm, whimsical glow. Solar garden stakes are eco-friendly and highlight paths or flower beds. Install spotlights to showcase focal points like a tree, sculpture, or water feature. Lighting extends the usability of your backyard and adds mood and charm after sunset.",
    
      "5. Create Zones",
      "Even in small yards, defining separate areas can make the space feel larger and more functional. Use pavers or rugs to delineate a seating area. Place planters or small hedges to subtly section off areas for dining or relaxing. Add a mini fire pit or water feature as a visual centerpiece. Each zone can serve a specific function, from reading nooks to herb gardens.",
    
      "6. Choose the Right Plants",
      "In small spaces, every plant matters. Go for compact shrubs and dwarf trees that won’t overwhelm the space. Layered planting (tall at the back, medium in the middle, low in front) adds depth. Mix colors and textures for visual interest, but avoid overcrowding. Consider native and low-maintenance plants to save time and water.",
    
      "7. Install Mirrors or Reflective Surfaces",
      "A designer trick that works wonders — strategically placed outdoor mirrors can make the space look larger, reflect light into shaded areas, and add a decorative touch. Just be sure they’re placed where they won’t overheat plants or create glare.",
    
      "8. Keep It Clutter-Free",
      "Less is more. Avoid cramming too much into your small yard. Focus on quality over quantity. Regularly tidy up leaves, tools, or toys. Use clever storage solutions like hidden sheds or wall-mounted organizers. A clean, open layout makes any space feel larger and more welcoming.",
    
      "🌱 Ready to Transform Your Backyard?",
      "Transforming a small backyard is about smart choices, personal style, and making the most of every inch. With a bit of creativity and planning, you can create an outdoor escape that brings joy, relaxation, and beauty into your everyday life.",
      "Need help designing your dream yard? At YouLandscape Architects & Consultants, we specialize in transforming spaces of all sizes. Contact us today for a consultation and let's bring your vision to life."
    ],    
  },
  'beyond-green-grass-ground-cover-alternatives': {
    title: '🌱 Beyond Green Grass: Exploring Unique Ground Cover Alternatives for Your Yard',
    date: 'May 27, 2025',
    content: [
      "Tired of mowing, watering, and fertilizing a thirsty lawn? You’re not alone. More homeowners are replacing traditional grass with creative ground cover alternatives that are beautiful, low-maintenance, and environmentally friendly.",
      
      "In this blog, we explore eco-conscious, aesthetic options that offer texture, color, and resilience without the typical upkeep.",
    
      "1. Clover: Clover lawns are soft, green, and stay lush through droughts. They enrich the soil with nitrogen, attract pollinators, and require minimal mowing. Microclover blends especially well with other low grasses, creating a durable, pet-friendly surface.",
    
      "2. Creeping Thyme: This fragrant herb forms dense mats of tiny purple or pink flowers in spring and summer. It tolerates foot traffic, resists pests, and thrives in sunny locations — perfect for pathways and lawn substitutes.",
    
      "3. Moss: Ideal for shady, damp areas where grass struggles, moss provides a rich green carpet-like texture year-round. It doesn’t need mowing, fertilizing, or even deep soil, making it great for naturalistic or Zen-style gardens.",
    
      "4. Sedum: Also known as stonecrop, sedum varieties are drought-resistant, hardy, and come in diverse shapes and colors. Use sedum mats or low-growing varieties in dry, rocky soils for a modern, low-maintenance aesthetic.",
    
      "5. Dwarf Mondo Grass: This slow-growing ornamental grass looks like a mini turf and works well in shaded borders, between pavers, or on slopes. It requires little mowing and thrives with minimal care.",
    
      "6. Chamomile: A soft, scented option that releases a gentle apple-like fragrance when stepped on. While not suitable for heavy traffic, it’s an elegant and fragrant ground cover for low-use areas.",
    
      "7. Mulch or Decorative Gravel: If greenery isn’t essential, mulch, bark chips, or pea gravel are excellent no-fuss alternatives. They suppress weeds, improve soil moisture retention, and create crisp contrast in landscape designs.",
    
      "Switching from turf to alternative ground covers not only saves water and effort, but it also introduces a new layer of texture and personality to your yard.",
    
      "🌿 Ready to ditch the mower and upgrade your lawn? YouLandscape Architects & Consultants can help you find the perfect ground cover tailored to your climate, soil, and style. Get in touch today to explore a new vision for your landscape."
    ],        
  },
  'the-roi-of-professional-landscape-design': {
    title: '🌳 The ROI of Professional Landscape Design: Why Investing Outdoors Pays Off',
    date: 'May 27, 2025',
    content: [
      "Landscaping isn’t just about making your yard look beautiful — it’s a strategic investment that offers measurable returns. Whether you plan to sell soon or stay long-term, professional landscaping can significantly increase your property’s value and appeal.",
      
      "Here’s why smart outdoor design pays off — financially and emotionally.",
    
      "1. Boosts Property Value",
      "Studies show that well-landscaped homes can see up to a 20% increase in market value. Features like patios, decks, lighting, and native plants signal quality and thoughtfulness — something buyers are willing to pay for.",
    
      "2. Enhances Curb Appeal",
      "First impressions matter. A front yard with manicured lawns, colorful plantings, and clean walkways instantly captures attention and sets your home apart from the rest.",
    
      "3. Saves on Long-Term Maintenance",
      "Professionals design with longevity and ease in mind. Native plants, proper drainage, and automated systems reduce your time and money spent on upkeep.",
    
      "4. Improves Energy Efficiency",
      "Strategic plant placement can reduce heating and cooling bills. Trees offer shade in summer, while hedges block cold winter winds — helping regulate indoor temperatures naturally.",
    
      "5. Increases Outdoor Usability",
      "Landscape features like fire pits, outdoor kitchens, or shaded patios extend your living space outdoors — making your property more enjoyable and versatile.",
    
      "6. Provides Psychological Benefits",
      "Well-planned green spaces improve mood, reduce stress, and promote wellbeing. A beautiful yard becomes a personal sanctuary, not just a financial asset.",
    
      "💡 Investing in landscape design is one of the smartest decisions a homeowner can make. At YouLandscape Architects & Consultants, we combine beauty with value — delivering spaces that elevate your lifestyle and your property. Let’s design your future outdoors."
    ],        
  },
  'sustainable-irrigation-techniques': {
    title: '💧 Sustainable Irrigation Techniques: Saving Water Without Sacrificing Beauty',
    date: '2025-07-15',
    content: [
      "As climate patterns shift and water becomes more precious, sustainable landscaping practices are more important than ever. Efficient irrigation techniques not only reduce your water bill, they help protect the environment too.",
    
      "Here are smart ways to keep your garden green — without wasting a drop.",
    
      "1. Drip Irrigation Systems",
      "Unlike sprinklers that spray broadly, drip systems deliver water directly to plant roots. This reduces evaporation, limits runoff, and ensures plants get exactly what they need.",
    
      "2. Smart Irrigation Controllers",
      "These systems use real-time weather data and soil moisture levels to adjust watering schedules. They prevent overwatering during rainy weeks and save water during dry spells.",
    
      "3. Rainwater Harvesting",
      "Collecting rainwater in barrels or underground tanks allows you to irrigate with a free, sustainable source. It’s great for flower beds, trees, and even lawn zones.",
    
      "4. Soaker Hoses",
      "Made of porous materials, these hoses slowly release water along their length — ideal for garden rows and dense plantings. They're simple to install and efficient in water delivery.",
    
      "5. Mulching and Soil Health",
      "A layer of mulch retains soil moisture, reduces evaporation, and prevents erosion. Healthy, nutrient-rich soil also holds water better, supporting drought-tolerant growth.",
    
      "6. Use Native and Drought-Tolerant Plants",
      "Choose plants adapted to your local climate. They need less water, resist local pests, and thrive with minimal care — making your yard resilient and resource-wise.",
    
      "💧 Water smarter, not harder. Our team at YouLandscape Architects & Consultants can design and install efficient irrigation solutions tailored to your space, soil, and sustainability goals. Let’s grow greener — together."
    ],        
  },
  'low-maintenance-backyard-designs': {
    title: '🌾 Low-Maintenance Backyard Designs for Busy Homeowners',
    date: '2025-07-10',
    content: [
      "Want a gorgeous backyard without spending every weekend maintaining it? You're not alone. The good news is you can have both — beauty and simplicity — with the right low-maintenance landscaping approach.",
    
      "Here’s how to design a relaxing, hassle-free outdoor space that practically takes care of itself.",
    
      "1. Choose Hardscaping Over Lawn",
      "Stone patios, gravel walkways, and composite decking offer long-term durability and require little to no care. They also add structure, contrast, and usability to your yard.",
    
      "2. Use Native Plants",
      "Plants that naturally grow in your region are already adapted to the local climate. They thrive with minimal watering, pruning, and fertilizing — saving you both time and resources.",
    
      "3. Go Perennial",
      "Unlike annuals that need to be replanted every year, perennials return season after season. Add flowering varieties for color and evergreen shrubs for year-round greenery.",
    
      "4. Install Smart Irrigation",
      "Drip systems and smart timers take the guesswork out of watering. Set it and forget it — while your plants thrive on the perfect amount of moisture.",
    
      "5. Minimize Lawn Areas",
      "Reduce or eliminate traditional turf to cut back on mowing, edging, and fertilizing. Replace with ground covers, synthetic grass, or hardscape zones.",
    
      "6. Use Mulch to Your Advantage",
      "Mulch keeps weeds down, soil moist, and garden beds tidy — all while enriching the soil over time. It’s one of the best set-it-and-forget-it solutions.",
    
      "7. Add Solar or Automatic Lighting",
      "Skip the wiring and timers with solar path lights and motion-sensing fixtures. These lights charge on their own and provide ambiance and safety at night.",
    
      "🪴 Less maintenance doesn’t mean less beauty. With YouLandscape, we’ll design a space tailored to your lifestyle, so you can enjoy your yard — not just work on it."
    ],        
  },
  'benefits-of-vertical-gardening': {
    title: '🌿 The Benefits of Vertical Gardening in Small Spaces',
    date: '2025-06-28',
    content: [
      "When outdoor space is limited, it’s time to think vertically. Vertical gardening is a clever solution for urban yards, balconies, patios, and small gardens — and it’s more than just practical. It’s a way to maximize green beauty without sacrificing square footage.",
    
      "Here’s how vertical gardening can transform your space — functionally and visually.",
    
      "1. Save Space",
      "By growing plants upward rather than outward, you free up ground area for walkways, seating, or decorative features. This makes vertical gardening perfect for small plots or narrow areas along fences or walls.",
    
      "2. Improve Air Quality",
      "Vertical gardens help purify the air by absorbing carbon dioxide and releasing oxygen. When placed near windows or outdoor seating, they freshen the air and enhance comfort.",
    
      "3. Grow More in Less Area",
      "From herbs and lettuces to strawberries and tomatoes, vertical planters let you grow a variety of edibles in compact arrangements — even on balconies or patios.",
    
      "4. Add Visual Interest",
      "Vertical gardens create living walls, cascading greenery, and textured displays that act as art pieces in your yard. They soften hard surfaces like fences and brick walls and draw the eye upward, adding depth to your space.",
    
      "5. Enhance Privacy",
      "Mounted planters or climbing vines can form natural green screens to create separation between yards, block unwanted views, or define outdoor zones like seating or dining areas.",
    
      "6. Reduce Heat and Noise",
      "Living walls can insulate buildings and buffer noise from nearby roads or neighbors. In hot climates, they also reduce heat absorption on wall surfaces, helping cool adjacent spaces.",
    
      "7. Make Maintenance Easier",
      "When your plants are at eye level or higher, gardening becomes more ergonomic — less bending, less kneeling, and more accessibility for watering and harvesting.",
    
      "🌿 Whether you have a tiny terrace or a cozy courtyard, vertical gardening opens new opportunities to green your space. Let YouLandscape design your perfect living wall or modular vertical garden — built for beauty and function."
    ],        
  },
  'how-landscaping-boosts-property-value': {
    title: '🏡 How Landscaping Boosts Property Value: What Buyers Look For',
    date: '2025-07-05',
    content: [
      "First impressions matter — especially when selling a home. A beautifully maintained landscape doesn’t just wow potential buyers, it boosts your home's market value and accelerates sales. Landscaping is one of the few upgrades where beauty and ROI go hand in hand.",
    
      "Here’s how landscaping helps your home stand out and gain value.",
    
      "1. Enhances Curb Appeal",
      "A neat lawn, colorful plants, and well-trimmed shrubs create an inviting entry. Buyers often make up their minds within minutes, and great landscaping creates a positive emotional impact right away.",
    
      "2. Signals Care and Maintenance",
      "A well-landscaped yard implies the rest of the home has been equally cared for. Tidy paths, fresh mulch, and healthy plants show pride of ownership — a quality buyers trust.",
    
      "3. Adds Functional Outdoor Living",
      "Patios, decks, fire pits, pergolas, or outdoor kitchens expand usable square footage. Buyers love homes with ‘extra rooms’ outside — especially those ready for entertaining or relaxation.",
    
      "4. Provides Long-Term Value",
      "Trees, native plants, and quality hardscaping are lasting improvements. Unlike trendy kitchen remodels, landscape upgrades don’t go out of style and often grow more beautiful over time.",
    
      "5. Offers Privacy and Comfort",
      "Fences, hedges, and privacy screens enhance security and comfort — features modern buyers prioritize, especially in suburban and urban settings.",
    
      "6. Increases Market Value",
      "Homes with professional landscaping can sell for 10–15% more than comparable properties without. In hot markets, even basic upgrades can translate to faster sales and higher offers.",
    
      "🏡 Want to sell for more or simply enjoy your home’s full potential? At YouLandscape, we design and install landscaping that’s both beautiful and strategic — helping you enjoy your space now and invest in your future."
    ],        
  },
  'using-mulch-effectively': {
    title: '🍂 Using Mulch Effectively: A Gardener’s Secret Weapon',
    date: '2025-07-01',
    content: [
      "Mulch might not be the flashiest part of your landscape, but it’s one of the most powerful tools in any gardener’s arsenal. It enhances plant health, improves soil, and gives your yard a polished, professional look.",
    
      "Let’s break down why mulch is more than just a finishing touch — and how to use it right.",
    
      "1. Retains Moisture",
      "A 2–3 inch layer of mulch helps soil stay moist longer by reducing evaporation. This means you water less often — saving time and resources.",
    
      "2. Suppresses Weeds",
      "Mulch creates a barrier that blocks light from reaching weed seeds. Fewer weeds mean less maintenance and healthier garden beds.",
    
      "3. Regulates Soil Temperature",
      "Mulch insulates your soil, keeping it cooler in summer and warmer in winter. This protects delicate roots and encourages year-round plant growth.",
    
      "4. Prevents Erosion and Runoff",
      "During rainstorms, mulch helps slow water flow and prevent topsoil from washing away — especially on slopes or around exposed roots.",
    
      "5. Enriches the Soil",
      "Organic mulches like bark, straw, or compost break down over time, adding nutrients back into the soil and supporting soil health naturally.",
    
      "6. Adds Visual Appeal",
      "Mulch creates clean lines and unified beds around plants, trees, and borders. It contrasts beautifully with greenery and flowers, giving your garden a tidy, well-maintained look.",
    
      "7. Protects Plant Roots",
      "It acts as a buffer between roots and extreme heat or cold. It also protects tree trunks and shrubs from mower damage when applied properly (not piled up against stems).",
    
      "🌾 Mulch smarter, not harder. Our experts at YouLandscape Architects & Consultants can help you choose the best mulch type for your garden, install it correctly, and keep your yard healthy and beautiful season after season."
    ],        
  }
};

export default function BlogDetail() {
  const { slug } = useParams();
  const post = blogPosts[slug];

  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (post) {
      const currentTags = post.tags || [];
      const related = Object.entries(blogPosts)
        .filter(([key, blog]) => key !== slug)
        .map(([key, blog]) => {
          let score = 0;
          if (blog.category === post.category) score += 2;
          const sharedTags = (blog.tags || []).filter(tag => currentTags.includes(tag));
          score += sharedTags.length;
          return { key, blog, score };
        })
        .filter(({ score }) => score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);

      setRelatedPosts(related);
    }
  }, [slug, post]);

  if (!post) return <Navigate to="/blog" />;

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>{post.title} | YouLandscape Blog</title>
        <meta name="description" content={post.content[0].slice(0, 150)} />
      </Helmet>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--primary-green)] mb-4">{post.title}</h1>
        <p className="text-sm text-gray-500 mb-8">Published: {post.date}</p>

        <div className="prose prose-lg max-w-none space-y-6">
          {post.content.map((paragraph, index) => {
            const isListItem = /^\d+\.\s/.test(paragraph);
            const isHeading = /^[A-Z][a-z]+.*:$/.test(paragraph);
            if (isListItem) {
              return (
                <p key={index} className="pl-4 border-l-4 border-green-300 text-gray-800 font-medium">
                  {paragraph}
                </p>
              );
            }
            if (isHeading) {
              return (
                <h2 key={index} className="text-2xl font-semibold text-gray-800 mt-6">
                  {paragraph.replace(/:$/, '')}
                </h2>
              );
            }
            return <p key={index}>{paragraph}</p>;
          })}
        </div>

        <Link to="/blog" className="mt-10 inline-block text-[var(--primary-green)] hover:underline">
          ← Back to Blog
        </Link>

        {/* Related Blogs */}
        <div className="mt-16">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Related Blogs</h3>
          <div className="space-y-4">
            {relatedPosts.map(({ key, blog: related }) => (
              <Link
                to={`/blog/${key}`}
                key={key}
                className="block p-4 border border-gray-200 rounded-md hover:bg-gray-50"
              >
                <h4 className="text-lg font-semibold text-[var(--primary-green)]">{related.title}</h4>
                <p className="text-sm text-gray-600">{related.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}