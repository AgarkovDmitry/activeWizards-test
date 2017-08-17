import React from 'react'

import styles from './style.less'

const res = {
  description: 'HP EliteBook Revolve 810 G3, Процесор Intel® Core™ i5 п’ятого покоління, 2,2 ГГц, 29,5 см (11.6"), 1366 x 768 пікселів, 8 ГБ, 256 ГБ'
}

export default ({ }) => (
  <div className={styles.product}>
    <div className={styles.sponsor}>
      <a href="/search/index?keyword=HP&amp;lang=uk">
        <img src="http://images.icecat.biz/img/brand/thumb/1_91e0e5b25690437cb026012c624a00ad.jpg" alt="810 G3" title="HP 810 G3" className="brand-img"/>
      </a>
      <a rel="nofollow" href="/uk/menu/partners/index.html">(cпонсор)</a>
    </div>

    <div className="blockImgTov">
      <div className="thumb-pic">
        <a className="" href="/uk/p/hp/j8r97ea/noutbuki-0889296211525-HP-EliteBook-Revolve-810-G3-2-2GGc-i5-5200U-11-6-1366-x-768pikseliv-Sensornij-ekran-Cribnij-Noutbuk-25989616.html">
          <img alt="HP EliteBook Revolve 810 G3 2.2ГГц i5-5200U 11.6&quot; 1366 x 768пікселів Сенсорний екран Cрібний Ноутбук (J8R97EA)" title="HP 810 G3" className="" id="img-thumb-25989616-15914248" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAQECAQEBAgICAgICAgICAQICAgICAgICAgL/2wBDAQEBAQEBAQEBAQECAQEBAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgL/wAARCABLAEsDAREAAhEBAxEB/8QAHwAAAQMEAwEAAAAAAAAAAAAAAAcJCgQFBggBAgsD/8QAOxAAAQQCAAUCAwQHBwUAAAAAAgEDBAUGBwAICRESExQKITEVFhciGSNXcZa31RgyOEFRd8UkaJGx8P/EAB0BAQADAAIDAQAAAAAAAAAAAAABBAUDBgIHCAn/xAA9EQABAwMDAgMDCQQLAAAAAAABAAIDBAURBhIhMUETIlEVFpEHFDIzYXGBwfAXkqHSI0JDRlJTVVZjg7H/2gAMAwEAAhEDEQA/AJ/HBEcERwRHBEcERwRHBEcERwRHBEcEUKfrO9YPq66S6lmYcm3Twx3A7PGtZaB17tPIoEjXOLZhkk0MrQJF5lFxbZrdR2K+riybajgssRUBE8/VdV03V9K5RW6uuUj4aGmdUyRt3ODQCQ3IG457ZIH4rMul5tllhjqLpWx0MMzxG10hwHPILg0YB5IaTj0Cbld6uvxVzDzsd7VOLtPsQ0sXmj0bpQTar1UhSa4K5X3CL5CSeovYUUV+fyXjT91NRDINqmyBk8N6evXosEfKBo4gEahpiHHaPM7k+n0eq5/S6/FXo9Ej/hTi/rz2VkQmfwN0orspjxU1dYbTK+7oeAqvdEX5J3+nz4n3U1Flo9lTZdyOG8j4qff/AEcA53vDTYYcE7ncH0Pl4VPI6s3xXDwNyG9a1MVp18oDPtdFaDKO5NafcadZX3Vw8ZSUcZebUUcHsTSp4+Ql3e6uojtxaZvN04HP8U9/9HDcDqGmywZPmdwPU+VWr9Mx8Ux+y/HV7f8Ab9qb5/8AjIP/ALvxY9y9Uf6PN8GfzKv+0nQ/+5Kb4v8A5Er2l+r18SRkGUyo22sYx7FcZj0suQzLb0NqaNImW6yIrMKG0a2ryKKNOSnT/J9GETundOPE6M1R2ssx/c/N4/NSPlI0Of7zUw/GT8oythcm6vPWgwbHrTMsmuKCvx3HwZlWc6z0rrD7MaRx0W4seete4j4svyFBpfRIHOzi+BgXY0q1mmr9b6d9VW2uWmgiGXOdswBkNzw8k+YgcDuFoW7WelrvVRUVtvkFbVTnaxjPEJcdrn4GYwM7WOdyRw0qbDpjNbDZOoNV7DtokSBaZ5rfBczsoMBXlgw5+U4tU3syLCWQZOLEbkz3Qb8yU/AB8lUu68Ya7OlK4IjgihC8zeo8w3h8T9vPXGE3tLjlxkPIpqiIVvfRI1jEhRO2HPvvsVsmMfvJyegPpeDsZxpSV1HlECad1bRcnWypMrc4kbtJBcMch3RhBcMjBaTjnJ6KnWUkdZGI5WNka05w5rHDPTjeCAcE4OM9u6dxx/o85xLrfVybmUkQbj3Fh60eg1tQyqsOz/lDNh6Vbifh7cwRwETsJIqAXbvx2GTWVU12IoRI3A5L5GnPcYJPx7rNbYaEjLoIwT/xRHj90D8Ff06PV4x3JOZ63ICgPxnfcamxJ4fVf8kKWnq3Co0YIiI24nZxtR7offuvHE7WdaetMByDxLIOnbjsfToV5iw0H+VGf+iH49PgqUej1Z/3g5p7gVaJHA89aYi4DjzRAotyRO7X1IRKAoYJ2IkUhQ0ReB1lWEFppG4II+tlBweOCCCD6EEEdRgjKg2CgwfIwE9/Bh4zxkZbjI68jr27LnLumXX0PuLK/wCbHDcQGOLkuZMsdYavpI1cwzFeKUb8W4yX2cerBsGiVXWUMO5GryL4knBbK2/urGVNphuFVQxsLPmYfNWUxkdz4zppoJ64y+jTXCEDgQgcLgng05RWltjub6EVVRKJW1k/gwV7ml2BEx0ckERhz5cNpt56GQlY9TdKyDsirW1xfnNr8kq4wPwWLPC8B1ZOgIqSTEDmTsUvPB5xVBtEM3PV+RgLiIqIlj2/cLQK2lmts1O65EmQVE9W6QZDgfANQS+nHm4FMYmjykAFrcWWUFuqpKCqiFNL7N2+GY6elMbtu0t8djGeHU52jd84bLuyQ7Ic7OmnUm6btloHkf3ZstzmAsc4hYnX0S/dqZgOK1LtmVzmVRVF7m+gT3JaNtHNadAPzAnt1BEEFHxwprmJWVQbHMHVTGRu311bOwNY5rgWwzzPha/LBl7WB55y45ObrqKF9Ya50UMc7juPg01PTtB27fKyCONjBjsxrQTkkZJJkx8qvy5YeXNP9ND6f/l3jfGSOgV1L5xKI4IoWu6MktMX+KO35Y081ayw/sDauaZtEsqmnStAvuYUiUVnbSWUhN+gjoKbLgvd3kRCQCNUt0DoGVkD6nHgB3myNwxg9gDnnHYqvVNldTyNh+tI4wcdx3yMcfan18L2rikGlowvNkR4trTzLGZIjzNp19+5NciOPN1Ehq2bbZH2II3DWO3GagqysYWn23BA/V7M+4WrLgySMh3H1BHB+l/UPJ75z9mFiikr+C5ruCP7TOcdD9Ltx0wrjg248Oh22upOT59jTA07lxZ5ER7ApbAIti67BaqpiR48NsbJHqsHlNYwx2Q7eMiNKJwXA4aq4W59PVMhewvkYWt/oiDgg8Z2DHJ6k59CAuWCkq2ywOka4Na4OPnBGRgZwHc8D0W3GwM6K50tlOXazs1sPd0ciXSXlMNW/wCcFJ7USym1xNdnhcbhhYKLoB5tE0roJ3BC4y7BHSzXm3xVoa6mkkw4OOGk4JaHeoL9oI79DwVW1jU3Kj0zeKq0ucy4QRbmOY3c9oD2b3NGD5mx7yDg4wTjICiOc/8AzR6u15V5/o/DIFhl20s3orDH87kv2VjJxnEa/JoH/VOXkqxJ47/LnK6aLseMw54sJJB6ZJTuMVz7I0NbrwDDW+N8xtThhsYaB4wbwNrBtaxjSCN+AeCGjHK+ca++XbVtNRe8op7q23PbJSzvp4hVxPa4E+FUQhjxG4jEkb98cn+DcA4Nj8k2c7k1zzKaZa5cbu8qNsZLn+K49QY9irjhfe2PYXUJi3p8kx6OaRrzEVpynOWiT21iRoTL0pxxhWReb73rOPS82l7u3VTYqi3Q08rjv2ukY8MPhvhdy6Kbft2OaWndgeYEg27E+7su9F7GL4quSVgG3Ia4bhuEjRw9m3O4EHy5IxjKmYda59p7ppczzLTf5CiYcjRj9kqCtjs7GFBQWO6rpAoinivzXsqeS/Xj85B0GeuB8ccr6p9U41yrf4YuXT/YjUH8u8b4lEvfBEcEURmnVxPi59qk2MgyHp/4b+VnxRou+P4+PaZ4R3XyY+fcUjArvqo0qr6SOcEUl4Zct7CdevlVVzCra4A6EU2sgNuKTkllpCjNLjCGckBeUmxIGfAu5GTaNqikWAb7K3K21Q5EO0ZX74LHcjVU7NosdwDOtfKdMZqsPkCZR245+LrpseMeVMaQnG3HREiX4XlO8ktOvCDi1XuPs1tuOXZPtaQy5OBqa026gCgssqatp380Hv2QO8c8+n3fn3+7t+Kfr9fr4pq3mw5aenLm2XZVm21uUxvaezKy/wAaqs4kYhh+Y4xeWDt7AfZq7OwtaG0qa7KWW2IMdtx9l2S60gti4SdlRPaemtR/KDT0dLQ2/V/su2PjkfCJ56eVjQw5cxrJGyyxElxLWkNB5wsSTRena6Xx57TTtkkydwzHuOeS4RObkknOSOVdse1Zy4clmS4FW8oHLPq2gmbHvMnw7OM4pcatbnM8dYhw4siBDlZZPOdNcbMpLhFElzBiP+z7eDnYu1UVt31fBcJtV6iqH/MGxywwySRMjlLnOziMbG5AHDmN3DK0LXp+0W4Smko46NwA5aBvcD2L3kuI+wFa4c/Oc59szoz74y3ZbCtZdMfrYk4RxqNjAjHr9tYvGhIVYMdtyOXpIqKXinmqfPjrOq6G3W691NLanB1ExsZaRIJRlzQXecE557Z46LSqWRslLYjlmB3z/FPNcq/+GPl1/wBidQfy7xzjrg6BcCXriURwReeV13si6m3Jv1vMj5wOR/V+fvWGacsur8Qx/YdBper3RQyKePWPUmV1TkC0x+ziVNq3b1AASPNMy0aUXG+7DyERFoT+mx+Js9pChfYGy0jVxwnYjSch+uhRoq0wKKv5dU/nQCAfr3RVT/Xgiv1z1UviXs/ZoZl7fYuC1zzVtX111qDlVxa0rZxI06ydpSWNNGlVVuyTYKrMlpqRHMVFwBIVRCJZcf6n/wAUBkUK/sfvLiUh2tho+DtXpTkjtYnqr5yCG9nSnGDq4nt2JLnmDcg1Vry9PxRVVxz6pzx6LNdRdTf4kSfsTGB29m+nYmuhfknkqhhfI57iTDYrZrsWvBqtcCUQOzzjCqtKPghkaqgoveNo9Ai3RndV7qpwJUiE7dtTnWXxcOTTctmCZXVPvkgvNvwr/GMUnV9iKK4iC5GlPC2SE0pC4BgLA9ESM7u58+o1zKawyrSWxoWQZNhudhGYtaKn5Z4mN2VnLi2sa3r22LqnwliRFeK6ixCIhdD1F7i6XgR8TwPsRTpuXjH7jEtBaQxXIoR1uQY1qHWeP3lc44y8cC4psJoq2zhG9HcNt02psZ9tSAyAlb7iRCqKpEsXBEmu4drYhpDWObbXzuwGtxXBcfn39s+vf1Xm4bSqxAiAIqrs+TKVmOwCIqk7JFPp34FF5UHU653+ZPmO5pcy3pC3DtTCKLMpEikbocIynMaaixbHvAImOw62DVzmWxum6piMyJqCSFR01EkdP1Bf+qOv3FN92O7ebWtWS/ecx286f7PnQo906uxM3FmA8y3Z19LYVjoXCjbynFprAZKRgkx5B1sojUDMFaIqV3b+/WpFhDveYDYMGVBFyqyd+VlN8tnXeb7/ANlWEc0t5L02yWY/EOc0wc2WY1jgHJjA6icFKy5va22Z1nHsMh3lkCS62YORW7h5BMks4tMsI8eHSWVS0s6Y3YUrwZFWhOo4Xu5LZY68+4/EIz9IoK+4bu3kYMmG9MwRuBSR769rm762tTpqv3dQ9VSlkJdmtlj4u3tYD1f5u2cb0pIuvCgg0pPxVta33zNG5ANrmG3DUQlqbfMXK+szjL2YjEW8hVqzpbAw8hFqyoShkbrlYIhJrycnORiQm21UmFU49vLmyeex6E5zD7wmt3NbUyH0i7HzaU+1FbkM10C1jTvtVzxh+s3ewnGCFJLEloWn3nlBtVIft6L0u+hfz6Oc1HLbB1NsC4cmbl0TVVWO2EmeUr7QyzDY8aPFpL5w5QIsiwigseLMVFUuzkZwu5Ga8FKfQ4Im2+cuXhG6IVhpvKqfHszwSBNbayrHbkmpldZ3TAeosebCQ+7qxG3hEGz8f1sgzX+6HciZa23yJcrM2JCi1vLZqvtVT3rir9LCIsoodu6kL1LFkyA1SYo11enmvde0JtE7ePzItF8i6fGj3EkMR+W7B3I4yTsgit6+B0HJzTT4NvNtnFVPX7POiP0T9eXZE8y7kV41507dH3tkU/IuWTCSmTJDkmbKtdYtq6/LkuerJfeJ+t+bxvGREvy7qS8EW+uOdMrlYCqEV5a9JIXp+X6/UeMOuovb5qhv0ikJKqr37L8+/wA+CJC8/wCm/wAvdZLdCl5cNZstzm3a+ctdrKsjtP18pQKRHkehWgKxjcajkYqvZVaReyqicESAj0+9NRZ7JLy/YOgxIz9ZH8dfx0FqufCU1IgtdofZIhtTpgkHbxJJRp9CXgi2I1ryJ8uNacAJXLprQW44mw207gkRptliRIWXIbEVjijYnLM3F/zRw1NFRVVeCJ0PRGrNRaMzKmz7WesdeYPk8SK3XP3FJVQ6Wwk1AMBGKpefAv18J2KHouiXYlFRNSIgTgievxrIazK6GqyOmktS6y3htTIj7Drb7ZAfcTBHmiUXCB0TAlFVFSbXsqpwRW2x1/gdvJlTbbCcRtJk0vKbLscbppsmWXgLflKfkwiOQXpgA9zVfygifRE4IrOmndRj9NWa5T92EYyn/qs4Iu34Q6m/Zfrv+Csa/pnBFwun9Sr9dXa6X9+E40v/ABnBF0XTeoV+uqtbr/l88Hxj+l8ER+DWoP2Va3/gbGP6XwRH4N6h/ZVrf+BsY/pfBF1XTGnl+uqNar+/BcXX/i+CL6s6f1JG8lj6t10wpoiH6OEYy15on0QvCsTyT9/BFncGBBq4caurYcWur4bIR4cGDHZiQ4sdtPFtiNGjgIMMiKdhERQUT5InBFVcERwRHBEcERwRHBEcERwRHBEcEX//2Q==" width="75px"/>
        </a>
      </div>
    </div>

    <div className="MoreInfo_wrap" id="infoMore-25989616">
      <a className="titleSearch" href="/uk/p/hp/j8r97ea/noutbuki-0889296211525-HP-EliteBook-Revolve-810-G3-2-2GGc-i5-5200U-11-6-1366-x-768pikseliv-Sensornij-ekran-Cribnij-Noutbuk-25989616.html">
        HP EliteBook Revolve 810 G3 2.2ГГц i5-5200U 11.6" 1366 x 768пікселів Сенсорний екран Cрібний Ноутбук (J8R97EA)
      </a>
      <br/>
      <p className="textAll">
        <span className="text-description-hidden">
          {res.description.substring(0, 110).trim() + '...'}
        </span>
			  <span className="breadcrumb-separator-serch"/>
			  <span className="moreInfo">more</span>
      </p>
    </div>

    <div className={styles.price}>
      <a href="/uk/p/hp/j8r97ea/noutbuki-0889296211525-HP-EliteBook-Revolve-810-G3-2-2GGc-i5-5200U-11-6-1366-x-768pikseliv-Sensornij-ekran-Cribnij-Noutbuk-25989616.html?ti=offers" title="HP EliteBook Revolve 810 G3 2.2ГГц i5-5200U 11.6&quot; 1366 x 768пікселів Сенсорний екран Cрібний Ноутбук">
        8 пропозицій<br/>
        UAH 24288,00<br/>
        без ПДВ<br/>
        (UAH 29145,60<br/>
        з ПДВ)
      </a>
    </div>
  </div>
)