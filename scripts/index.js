document.addEventListener("DOMContentLoaded", () => {
    const skillsSection = document.querySelector("#skills");
    const slogan = document.querySelector(".skills_slogan");
    const plate = document.querySelector(".plate");
    const fork = document.querySelector(".fork");
    const knife = document.querySelector(".knife");
    const icons = document.querySelectorAll(".skill-icons img");

    let played = false; // 여러 번 재생 가능하게 할 코드 아래 있음

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !played) {
                played = true;

                // 1) 슬로건 등장
                setTimeout(() => {
                    slogan.style.opacity = 1;
                    slogan.style.transform = "translateY(0)";
                }, 200);

                // 2) 접시 등장
                setTimeout(() => {
                    plate.style.opacity = 1;
                    plate.style.transform = "translateY(0)";
                }, 700);

                // 3) 포크 & 나이프
                setTimeout(() => {
                    fork.style.opacity = 1;
                    fork.style.transform = "translateY(0) scale(1.05)";
                    knife.style.opacity = 1;
                    knife.style.transform = "translateY(0) scale(1.05)";
                }, 1100);

                // 4) 아이콘 랜덤 순서 등장
                setTimeout(() => {
                    const arr = Array.from(icons);
                    const randomOrder = arr.sort(() => Math.random() - 0.5);

                    randomOrder.forEach((icon, i) => {
                        setTimeout(() => {
                            icon.classList.add("show");
                        }, i * 150); // 랜덤 순차 등장
                    });
                }, 1500);
            }

            // ⭕ 다시 올라갔다 내려오면 재생되게
            if (!entry.isIntersecting) {
                played = false;
                resetSkills();
            }
        });
    }, { threshold: 0.3 });

    observer.observe(skillsSection);

    // 리셋 함수 (섹션 벗어나면 다시 숨김)
    function resetSkills() {
        slogan.style.opacity = 0;
        slogan.style.transform = "translateY(80px)";

        plate.style.opacity = 0;
        plate.style.transform = "translateY(80px)";

        fork.style.opacity = 0;
        fork.style.transform = "translateY(80px)";
        knife.style.opacity = 0;
        knife.style.transform = "translateY(80px)";

        icons.forEach(icon => {
            icon.classList.remove("show");
            icon.style.opacity = 0;
            icon.style.transform = "translateY(80px)";
        });
    }
});


document.addEventListener("DOMContentLoaded", () => {
    
    // ABOUT ME 버튼 → #profile 이동
    document.querySelector(".btn.about button").addEventListener("click", () => {
        document.querySelector("#profile").scrollIntoView({
            behavior: "smooth"
        });
    });

    // SKILLS 버튼 → #skills 이동
    document.querySelector(".btn.skills button").addEventListener("click", () => {
        document.querySelector("#skills").scrollIntoView({
            behavior: "smooth"
        });
    });
    document.querySelector(".btn.projects button").addEventListener("click", () => {
        document.querySelector("#webdesign").scrollIntoView({
            behavior: "smooth"
        });
    });
    document.querySelector(".btn.others button").addEventListener("click", () => {
        document.querySelector("#others").scrollIntoView({
            behavior: "smooth"
        });
    });

});
/* nav자연스러운 스크롤 */
document.querySelectorAll('#webdesign .project_link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        
        const top = target.getBoundingClientRect().top + window.scrollY - 150;  
        // 150px 위 여백 (원하는 값으로 조절 가능)

        window.scrollTo({
            top: top,
            behavior: 'smooth'
        });
    });
});
/* nav색깔 활성화 */
const sections = document.querySelectorAll('#webdesign .info_wrap');
const navLinks = document.querySelectorAll('#webdesign .project_link');

window.addEventListener('scroll', () => {
    let current = "";
    let minDistance = Infinity;  

    sections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        const distance = Math.abs(rect.top - 200); // 200px 위여백 감안
        
        if (distance < minDistance) {
            minDistance = distance;
            current = sec.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

/* 다른페이지에서 nav가 안보이기 오직 웹페이지에서만 작동 */
const webSection = document.querySelector('#webdesign');
const nav = document.querySelector('#webdesign .project_nav');

function checkNavVisible() {
    const rect = webSection.getBoundingClientRect();
    
    if(rect.top <= 100 && rect.bottom >= 300){
        nav.style.display = 'flex';
    } else {
        nav.style.display = 'none';
    }
}

window.addEventListener('scroll', checkNavVisible);
window.addEventListener('load', checkNavVisible);  // ★ 새로고침 즉시 실행


const topBtn = document.getElementById('topBtn');

topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
document.querySelectorAll('.btn[data-link]').forEach(btn => {
    btn.addEventListener('click', () => {
        const link = btn.getAttribute('data-link');
        if (link) window.open(link, "_blank");
    });
});




