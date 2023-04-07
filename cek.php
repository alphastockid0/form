<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Print Example</title>
    <style>
        /* CSS untuk mencetak elemen dengan class 'notes' */
        @media print {
            .notes {
                width: 100%;
                font-size: 12px;
                border: none;
                background: none;
                line-height: 12px;
            }

            /* CSS untuk gambar pada saat mencetak */
            .notes img {
                display: block;
                margin: 0 auto;
                max-width: 100%;
                height: auto;
            }
        }

        .container {
            position: relative;
        }

        .word:after {
            content: '';
            display: block;
            position: absolute;
            left: 0;
            width: 100%;
            border-bottom: 1px solid black;
        }
    </style>
</head>

<body>
    <!-- Isi dokumen HTML -->
    <div>
        <textarea>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit diam justo, in vulputate massa sodales egestas. Aenean luctus sapien eleifend ipsum venenatis, nec pharetra sem congue. Quisque nec sem leo. Donec posuere nibh ut nibh vehicula, ut hendrerit mi sollicitudin. Proin sed sapien vel sem ultrices euismod eget quis urna. Nulla facilisi. Sed eu mi ac nulla consequat lobortis ac ac elit. Mauris sit amet ante ac ante pulvinar ultricies a ut ante. Suspendisse metus nulla, porttitor et augue quis, consectetur fermentum lorem. Phasellus metus est, ultrices quis enim porta, facilisis cursus ante. Ut justo quam, suscipit nec facilisis eget, elementum ac lectus. Nulla at auctor ipsum.</textarea>
    </div>

    <!-- Tombol untuk mencetak dokumen -->
    <button onclick="window.print()">Print</button>

    <script>
            var textarea = document.querySelector('textarea');
            var words = textarea.textContent.split(/\s+/gm);
            textarea.classList.add('container');
            textarea.innerHTML = words.map(function(w) {
                return '<span class="word">' + w + '</span>';
            }).join('\n');
    </script>
</body>

</html>