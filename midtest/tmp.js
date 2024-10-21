/*
USE myboard;

-- 학생(Student) 테이블을 생성
-- student_id: 학생의 학번을 나타내는 고유 번호로 기본 키로 설정
-- name: 학생의 이름을 저장
CREATE TABLE Student (
    student_id INT PRIMARY KEY, -- 학번 (기본 키)
    name VARCHAR(50) -- 이름
);

-- 과목(Course) 테이블을 생성
-- course_id: 과목을 식별하는 고유 번호로 자동 증가(AUTO_INCREMENT) 설정
-- course_name: 과목명을 저장
-- professor_name: 과목을 담당하는 교수의 이름을 저장
CREATE TABLE Course (
    course_id INT PRIMARY KEY AUTO_INCREMENT, -- 과목 ID (기본 키, 자동 증가)
    course_name VARCHAR(50), -- 과목명
    professor_name VARCHAR(50) -- 담당 교수명
);

-- 성적(Enrollment) 테이블을 생성
-- 학생과 과목 간의 관계를 나타내며 학생이 어떤 과목에서 어떤 성적을 받았는지 저장
-- student_id: 학생 테이블의 학번과 외래 키로 연결
-- course_id: 과목 테이블의 과목 ID와 외래 키로 연결
-- grade: 학생의 성적을 문자로 저장 (A, B, C 등등)
-- 이 테이블은 학생-과목 관계를 나타내는 다대다(N:N) 관계를 표현하며, 성적도 함께 저장
CREATE TABLE Enrollment (
    student_id INT, -- 학생 ID (외래 키)
    course_id INT, -- 과목 ID (외래 키)
    grade CHAR(1), -- 성적 (한 글자)
    PRIMARY KEY (student_id, course_id), -- 학생 ID와 과목 ID의 복합 기본 키
    FOREIGN KEY (student_id) REFERENCES Student(student_id), -- Student 테이블의 student_id와 외래 키 관계
    FOREIGN KEY (course_id) REFERENCES Course(course_id) -- Course 테이블의 course_id와 외래 키 관계
);

-- 학생(Student) 테이블에 데이터 삽입
-- 학번과 이름을 삽입
INSERT INTO Student (student_id, name) VALUES
(4407153, '이인규'), -- 학번 4407153의 학생 이름은 '이인규'
(4407155, '김동수'), -- 학번 4407155의 학생 이름은 '김동수'
(4408100, '김철수'); -- 학번 4408100의 학생 이름은 '김철수'

-- 과목(Course) 테이블에 데이터 삽입
-- 과목명과 담당 교수명을 삽입
INSERT INTO Course (course_name, professor_name) VALUES
('데이터베이스', '홍길동'), -- '데이터베이스' 과목을 담당하는 교수는 '홍길동'
('C언어', '아무개'), -- 'C언어' 과목을 담당하는 교수는 '아무개'
('자바스크립트', '천재'); -- '자바스크립트' 과목을 담당하는 교수는 '천재'

-- 성적(Enrollment) 테이블에 데이터 삽입
-- 학생이 수강한 과목과 받은 성적을 기록
INSERT INTO Enrollment (student_id, course_id, grade) VALUES
(4407153, 1, 'A'), -- 학번 4407153의 학생(이인규)이 과목 ID 1(데이터베이스)에서 'A'를 받음
(4407153, 2, 'A'), -- 학번 4407153의 학생이 과목 ID 2(C언어)에서 'A'를 받음
(4407155, 1, 'B'), -- 학번 4407155의 학생(김동수)이 과목 ID 1(데이터베이스)에서 'B'를 받음
(4407155, 3, 'C'), -- 학번 4407155의 학생이 과목 ID 3(자바스크립트)에서 'C'를 받음
(4408100, 1, 'B'), -- 학번 4408100의 학생(김철수)이 과목 ID 1(데이터베이스)에서 'B'를 받음
(4408100, 2, 'A'), -- 학번 4408100의 학생이 과목 ID 2(C언어)에서 'A'를 받음
(4408100, 3, 'B'); -- 학번 4408100의 학생이 과목 ID 3(자바스크립트)에서 'B'를 받음

-- Student 테이블의 모든 데이터를 조회
SELECT * FROM Student;

-- Course 테이블의 모든 데이터를 조회
SELECT * FROM Course;

-- Enrollment 테이블의 모든 데이터를 조회
SELECT * FROM Enrollment;

-- 학생의 학번, 이름, 수강 과목, 담당 교수, 성적을 조회하는 쿼리
-- Enrollment 테이블과 Student, Course 테이블을 조인하여 원하는 데이터를 가져옴
-- 각 학생이 수강한 과목과 성적을 알 수 있음
SELECT S.student_id, S.name, C.course_name, C.professor_name, E.grade
FROM Enrollment E
JOIN Student S ON E.student_id = S.student_id -- Enrollment 테이블과 Student 테이블을 학번(student_id)으로 조인
JOIN Course C ON E.course_id = C.course_id -- Enrollment 테이블과 Course 테이블을 과목 ID(course_id)로 조인
ORDER BY S.student_id; -- 학번 순으로 결과 정렬

*/
