import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const data = {
  Movies: [
    {
    id: 1,
    title: "Jawan",
    desc: "Action / Drama",
    genre: "Action",
    language: "Hindi",
    format: "2D",
    cinema: "PVR Cinemas",
    image: "https://avatars.mds.yandex.net/i?id=36457eb6930565697fd63197ff490f178ce2b6ac-5225010-images-thumbs&n=13",
    rating: "8.3/10",
    votes: "10.2K Votes",
    link: "/movie/1",
  },
  {
    id: 2,
    title: "Pathaan",
    desc: "Spy Thriller",
    genre: "Thriller",
    language: "Hindi",
    format: "IMAX",
    cinema: "INOX",
    image: "https://avatars.mds.yandex.net/i?id=0eee28300f1538cb8e8b24e1eedc26d4467a62ae-5219700-images-thumbs&n=13",
    rating: "7.9/10",
    votes: "8.7K Votes",
    link: "/movie/2",
  },
  {
    id: 3,
    title: "RRR",
    desc: "Epic Action",
    genre: "Action",
    language: "Telugu",
    format: "3D",
    cinema: "Carnival Cinemas",
    image: "https://avatars.mds.yandex.net/i?id=00c9d39cb803b7c47df6175d96966bf038dbaaa1-4416220-images-thumbs&n=13",
    rating: "8.7/10",
    votes: "12.3K Votes",
    link: "/movie/3",
  },
  {
    id: 4,
    title: "Animal",
    desc: "Crime Drama",
    genre: "Crime",
    language: "Hindi",
    format: "2D",
    cinema: "Miraj Cinemas",
    image: "https://i.pinimg.com/736x/bc/fe/47/bcfe47b4b2fbcb1dd40cef44569d6d81.jpg",
    rating: "7.6/10",
    votes: "6.9K Votes",
    link: "/movie/4",
  },
  {
    id: 5,
    title: "3 Idiots",
    desc: "Comedy / Education",
    genre: "Comedy",
    language: "Hindi",
    format: "2D",
    cinema: "Rajhans Cinemas",
    image: "https://avatars.mds.yandex.net/i?id=d53c3009c602bd41cb3dda862a73f926fa683af8-9849146-images-thumbs&n=13",
    rating: "9.1/10",
    votes: "14.7K Votes",
    link: "/movie/5",
  },
  ],
  Plays: [
    {
      id: 1,
      title: "Bluffmaster Gujjubhai",
      desc: "Sanjeev Kumar Auditorium: Surat",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxNiBBdWc%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00111300-dkkewrrhed-portrait.jpg",
      date: "Fri, 18 Jul",
      link: "/play/1"
    },
    {
      id: 2,
      title: "Jar Tar Chi Goshta",
      desc: "Marathi Play",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxOSBKdWwgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00443124-mlrjnrmrbr-portrait.jpg",
      date: "Sat, 19 Jul",
      link: "/play/2"
    },
    {
      id: 3,
      title: "Court Martial",
      desc: "Courtroom Suspense",
      image: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-court-martial-0-2022-6-13-t-11-37-40.jpg",
      date: "Sun, 20 Jul",
      link: "/play/3"
    },
    {
      id: 4,
      title: "Hello Zindagi",
      desc: "Social Comedy",
      image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/hello-zindagi-et00331298-1655801631.jpg",
      date: "Mon, 21 Jul",
      link: "/play/4"
    },
    {
      id: 5,
      title: "Waiting For Godot",
      desc: "Absurdist Classic",
      image: "https://in.bmscdn.com/events/moviecard/ET00100116.jpg",
      date: "Tue, 22 Jul", link: "/play/5"
    },
  ],
  Events: [
    {
    id: 1,
    title: "TELLING LIES – A Stand‑up Solo by Aashish Solanki",
    desc: "Stand‑up Comedy",
    category: "Comedy",
    language: "Hindi",
    price: 499,
    date: "2025-07-19",
    location: "Ahmedabad",
    organizer: "Aashish Solanki Live",
    tag: "Trending",
    type: "Offline",
    image: "https://in.bmscdn.com/events/moviecard/ET00452692.jpg",
    link: "/events/telling-lies-ashish-solanki",
  },
  {
    id: 2,
    title: "Vaatu Aapda Malak Ni",
    desc: "Gujarati Folk Music & Literature",
    category: "Music & Literature",
    language: "Gujarati",
    price: 299,
    date: "2025-05-08",
    location: "Ahmedabad",
    organizer: "Gujarati Lok Sangeet Mandal",
    tag: "Popular",
    type: "Offline",
    image: "https://in.bmscdn.com/events/moviecard/ET00447466.jpg",
    link: "/events/vaatu-aapda-malak-ni",
  },
  {
    id: 3,
    title: "Small World",
    desc: "Short Film",
    category: "Film Festival",
    language: "English",
    price: 0,
    date: "2025-07-01",
    location: "Multiple Cities",
    organizer: "Indie Film Network",
    tag: "Official Selection",
    type: "Online",
    image: "https://assets-in.bmscdn.com/nmcms/events/banner/mobile/media-mobile-small-world-0-2024-7-3-t-5-39-42.jpg",
    link: "/events/small-world-short-film",
  },
  {
    id: 4,
    title: "Short Film Adda",
    desc: "Monthly Short‑Film Screening",
    category: "Film & Culture",
    language: "Multi-language",
    price: 150,
    date: "2025-08-01",
    location: "Mumbai",
    organizer: "Adda Collective",
    tag: "Monthly",
    type: "Offline",
    image: "https://assets-in.bmscdn.com/nmcms/desktop/media-desktop-short-film-adda-2025-7-6-t-11-23-6.jpg",
    link: "/events/short-film-adda",
  },
  {
    id: 5,
    title: "Rambo Circus",
    desc: "Family Circus Show",
    category: "Family Entertainment",
    language: "Visual",
    price: 399,
    date: "2025-07-18",
    location: "Delhi & Pune",
    organizer: "Rambo Circus",
    tag: "Running",
    type: "Offline",
    image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxOCBKdWwgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00346481-psnrersdpc-portrait.jpg",
    link: "/events/rambo-circus",
  },
  ],
  Sports: [
    {
      id: 1,
      title: "Chess Championship (Online) – All Ages",
      desc: "Virtual Rapid/Blitz Tournament",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxMCBBdWc%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00442137-ljzjkpynhj-portrait.jpg",
      date: "Sun, 20 Jul – Sun, 27 Jul 2025",
      link: "/sport/chess-online-all-ages"
    },
    {
      id: 2,
      title: "Fit Ride",
      desc: "Virtual Cycling – 10 / 20 / 100 KM",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxOSBKdWwgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00449071-cddmlykzgw-portrait.jpg",
      date: "Sat, 19 Jul – Sun, 27 Jul 2025",
      link: "/sport/fit-ride"
    },
    {
      id: 3,
      title: "India Marathon – Get T‑Shirt & Medal by Courier",
      desc: "Virtual Run: 5K / 10K / 21K",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyMCBKdWwgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00423283-thmlvqqfuf-portrait.jpg",
      date: "Sun, 20 Jul 2025",
      link: "/sport/india-marathon-virtual"
    },
    {
      id: 4,
      title: "Bharat Cycling Challenge – Get Medal by Courier",
      desc: "Virtual Cycling – 10 / 25 / 50 / 100 KM",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyMCBKdWwgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00453301-wrwzcbfnct-portrait.jpg",
      date: "Sun, 20 Jul 2025 – Sun, 18 Jan 2026",
      link: "/sport/bharat-cycling-challenge"
    },
    {
      id: 5,
      title: "Kargil Vijay Diwas Walkathon",
      desc: "Virtual Walkathon (Medal by Courier)",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxOCBKdWwgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00451014-tcuxvjwgfv-portrait.jpg",
      date: "Wed, 17 Jul – Thu, 31 Jul 2025",
      link: "/sport/kargil-vijay-diwas-walkathon"
    },
  ],
  Activities: [
    {
      id: 1,
      title: "AquaImagicaa Surat",
      desc: "Water Park Adventure",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxOSBKdWwgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00363752-hvljntpbae-portrait.jpg",
      date: "Sat, 19 Jul – Sun, 31 Aug 2025",
      link: "/activity/aquaimagicaa-surat"
    },
    {
      id: 2,
      title: "Statue of Belief",
      desc: "Spiritual Tourism",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxOCBKdWwgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00388297-dsxmgrxeqc-portrait.jpg",
      date: "Ongoing",
      link: "/activity/statue-of-belief"
    },
    {
      id: 3,
      title: "Keseraiya Navaratri",
      desc: "Festive Dance Celebration",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-TW9uLCAyMiBTZXAgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00453920-rbdxgstqmj-portrait.jpg",
      date: "Starts Mon, 25 Sep 2025",
      link: "/activity/keseraiya-navaratri"
    },
    {
      id: 4,
      title: "Friendship Forever 3.0",
      desc: "Community Fun Meet",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAzIEF1Zw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00453368-xepemxpmnh-portrait.jpg",
      date: "Sat, 2 Aug 2025",
      link: "/activity/friendship-forever-3-0"
    },
    {
      id: 5,
      title: "Jus Jumpin – VR Surat",
      desc: "Kid-Friendly Amusement Zone",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxOSBKdWwgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00437449-cayydrnvtt-portrait.jpg",
      date: "Sat, 19 Jul – Thu, 31 Jul 2025",
      link: "/activity/jus-jumpin-vr-surat"
    },
  ],
  Music: [
    {
      id: 1,
      title: "Krishnaa – Music, Bliss and Beyond",
      desc: "Live Concert at Sanjeev Kumar Auditorium",
      image: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-krishnaa-music-bliss-and-beyond-0-2025-7-1-t-6-56-23.jpg",
      date: "Sun, 24 Aug 2025",
      link: "/music/krishnaa-bliss-beyond"
    },
    {
      id: 2,
      title: "HAR DIL JO PYAR KAREGA – Surat",
      desc: "Tribute Music Concert",
      image: "https://image.tmdb.org/t/p/original/66CpsF2lrolmsHI2BgZH16Cb7EB.jpg",
      date: "Sun, 27 Jul 2025",
      link: "/music/har-dil-jo-pyar-karega-surat"
    },
    {
      id: 3,
      title: "AN EVENING WITH KRISHNA – Surat & Ahmedabad",
      desc: "Classical / Spiritual Concert",
      image: "https://in.bmscdn.com/events/moviecard/ET00417398.jpg",
      date: "Thu, 13 Aug 2025",
      link: "/music/evening-with-krishna"
    },
    {
      id: 4,
      title: "Vaatu Aapda Malak Ni",
      desc: "Gujarati Folk Music",
      image: "https://in.bmscdn.com/events/moviecard/ET00447466.jpg",
      date: "Sun, 31 Aug 2025",
      link: "/music/vaatu-aapda-malak-ni"
    },
    {
      id: 5,
      title: "Surat Jamming Session by IJC",
      desc: "Live Band Jam at Otlo The Cafe",
      image: "https://in.bmscdn.com/events/moviecard/ET00453504.jpg",
      date: "Fri, 25 Jul 2025",
      link: "/music/surat-jamming-session-ijc"
    },
  ],
};

const CategorySectionCards = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, [user, navigate]);

  const renderFooterText = (item) => {
    if (item.rating) {
      return <>
        <FaStar color="red" /> <span>{item.rating}</span> <span className="ms-2">{item.votes}</span>
      </>;
    }
    return <span>{item.date}</span>;
  };

  return (
    <Container className="my-5">
      {Object.entries(data).map(([category, cards]) => (
        <div key={category} className="mb-5">
          <h2 className="mb-4 text-dark">{category}</h2>
          <Row xs={2} sm={2} md={3} lg={4} xl={5} className="g-4">
            {cards.map(item => (
              <Col key={item.id}>
                <Card
                  className="h-100 border-0 shadow-sm"
                  onClick={() => navigate(item.link)}
                  style={{ cursor: "pointer", borderRadius: "12px", overflow: "hidden" }}
                >
                  <div style={{ position: "relative" }}>
                    <Card.Img
                      src={item.image}
                      alt={item.title}
                      style={{ height: "260px", objectFit: "cover", borderRadius: "12px 12px 0 0" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        width: "100%",
                        backgroundColor: "#000",
                        color: "#fff",
                        fontSize: "14px",
                        padding: "5px 10px",
                      }}
                    >
                      {renderFooterText(item)}
                    </div>
                  </div>
                  <Card.Body style={{ padding: "10px" }}>
                    <Card.Title style={{ fontSize: "16px", fontWeight: "600", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {item.title}
                    </Card.Title>
                    <Card.Text className="text-muted" style={{ fontSize: "13px" }}>
                      {item.desc}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default CategorySectionCards;
