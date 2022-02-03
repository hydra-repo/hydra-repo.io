---
layout: page
title: "SDSF:<span class='alternate'>Hydra</span> - Team"
group: Team

team:
  - campus: Tennessee Tech
    name: Susmit Shannigrahi
    role: Project PI
    image: team/susmit-shannigrahi.jpg
    link: https://www.tntech.edu/directory/engineering/faculty/susmit-shannigrahi.php
    students:
      - name: Zachariah Threet
        image: 
        role: PhD Student

  - campus: Clemson University
    name: Alex Feltus
    role: Project PI
    image: team/alex-feltus.jpg
    link: https://scienceweb.clemson.edu/chg/f-alex-feltus/

  - campus: UCLA
    name: Lixia Zhang
    role: Project Co-PI
    image: team/lixia-zhang.jpg
    link: https://web.cs.ucla.edu/~lixia/
    students:
      - name: Tianyuan
        image: team/tianyuan-yu.jpg
        role: PhD Candidate

  - campus: FIU
    name: Alex Afanasyev
    role: Project Co-PI
    image: team/alex-afanasyev.jpg
    link: https://users.cs.fiu.edu/~afanasyev/
    students:
      - name: Proyash Podder
        image: team/proyash-podder.jpg
        role: PhD Candidate
 
---

<section class="section speakers">
    <div class="container">
        {% for pi in page.team %}
	<div class="row">
            <h3>{{ pi.campus }}</h3>
	    <div class="col-lg-3 col-md-4 col-sm-6">
		<!-- PI -->
		<div class="speaker-item">
		    <div class="image">
                        {% asset "{{ pi.image }}" class="img-fluid" alt="{{ pi.name }}" %}
			<!-- <div class="primary-overlay">
                             <p>{{ pi.bio }}</p>
                             </div> -->
		    </div>
		    <div class="content text-center">
			<h5><a href="{{ pi.link }}">{{ pi.name }}</a></h5>
			<p>{{ pi.role }}</p>
		    </div>
		</div>
	    </div>
            
            {% for student in pi.students %}
	    <div class="col-lg-2 col-md-2 col-sm-3">
		<div class="speaker-item">
		    <div class="image">
                        {% if student.image %}
                        {% asset "{{ student.image }}" class="img-fluid" alt="{{ student.name }}" %}
                        {% endif %}
		    </div>
		    <div class="content text-center">
			<h5><a href="{{ student.link }}">{{ student.name }}</a></h5>
			<p>{{ student.role }}</p>
		    </div>
		</div>
	    </div>
            {% endfor %}
            
        </div>
        {% endfor %}
    </div>
</section>
