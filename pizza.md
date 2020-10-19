---
layout: default
---
# Pizza
{% assign pizza_count = 0 %}

{%- for pizza in site.pizzas -%}
    {%- assign pizza_count = pizza_count | plus: pizza.pies -%}
{%- endfor -%}

Total pizzas cooked: {{ pizza_count }}
<div class="pizza-list">
    {% assign pizzas = site.pizzas | sort: 'date' | reverse %}
    {%- for pizza in pizzas -%}
        <div class="pizza-list-item">
            {%- assign date_format = "%Y-%m-%d" -%}
            <a href="#{{ pizza.date | date: date_format }}">
                <h2 id="#{{ pizza.date | date: date_format }}">
                    {%- assign date_format = "%B %e, %Y" -%}
                    {{ pizza.date | date: date_format }}
                </h2>
            </a>
            {%- for image in pizza.images -%}
                <picture>
                    <source srcset="{{ image }}.webp 1x, {{ image }}@2x.webp 2x" type="image/webp">
                    <source srcset="{{ image }}.jpg 1x, {{ image }}@2x.jpg 2x" type="image/jpg">
                    <img loading="lazy" src="{{ image }}@2x.jpg" class="pizza-photo"/>
                </picture>
            {%- endfor -%}
            {{ pizza.content }}
        </div>
    {%- endfor -%}
</div>