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

});
